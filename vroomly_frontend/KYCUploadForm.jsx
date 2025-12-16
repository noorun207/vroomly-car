import { useState, useEffect } from "react";
import ImagePreview from "./ImagePreview";

export default function KYCUploadForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  const [profile, setProfile] = useState({
    name: "User Name",
    email: "user@email.com",
  });

  const [formData, setFormData] = useState({
    aadhaar: null,
    license: null,
    voterPan: null,
    country: "",
    profilePhoto: null, // saved photo (base64 for persistence)
    carImages: [],
  });

  const [tempProfilePhoto, setTempProfilePhoto] = useState(null); // for preview before save

  // Load saved profile photo from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("profilePhoto");
    if (saved) {
      setFormData((prev) => ({ ...prev, profilePhoto: saved }));
    }
  }, []);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleTempPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setTempProfilePhoto(file);
  };

  const saveProfilePhoto = () => {
    if (!tempProfilePhoto) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePhoto", reader.result); // persist
      setFormData((prev) => ({ ...prev, profilePhoto: reader.result }));
      setTempProfilePhoto(null);
      setIsEditingPhoto(false);
    };
    reader.readAsDataURL(tempProfilePhoto);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 1) {
      setFormData({ ...formData, [name]: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile & KYC updated (frontend only) ✅");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={
                  tempProfilePhoto
                    ? URL.createObjectURL(tempProfilePhoto) // preview
                    : formData.profilePhoto || "https://i.pravatar.cc/100"
                }
                alt="profile"
                className="h-14 w-14 rounded-full object-cover border-2 border-gray-300"
              />
              {isEditingPhoto && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleTempPhotoChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                />
              )}
            </div>

            <div>
              {isEditing ? (
                <>
                  <input
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="block border rounded px-2 py-1 text-sm mb-1 w-48"
                  />
                  <input
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="block border rounded px-2 py-1 text-sm w-48"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-base font-semibold text-gray-800">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-500">{profile.email}</p>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              type="button"
              onClick={() => {
                if (isEditingPhoto) saveProfilePhoto();
                else setIsEditingPhoto(true);
              }}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {isEditingPhoto ? "Save Photo" : "Edit Photo"}
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          KYC Documents
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { label: "Aadhaar Card", name: "aadhaar" },
            { label: "4 Wheeler Driving License", name: "license" },
            { label: "Voter ID / PAN Card", name: "voterPan" },
          ].map((item) => (
            <div key={item.name}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {item.label}
              </label>
              <input
                type="file"
                name={item.name}
                onChange={handleFileChange}
                disabled={!isEditing}
                className={`w-full border rounded-lg p-2 ${
                  isEditing
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
                required
              />
            </div>
          ))}

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded-lg p-2 ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
              required
            >
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>

          {/* Car Images */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Car Images
            </label>
            <input
              type="file"
              name="carImages"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              disabled={!isEditing}
              className={`w-full border rounded-lg p-2 ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
            />
            <ImagePreview images={formData.carImages} />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={!isEditing}
              className={`w-full py-3 rounded-lg text-sm font-semibold ${
                isEditing
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Profile & KYC
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
