// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const token = localStorage.getItem("token");

 
//   const [user, setUser] = useState({});    
//   const [kyc, setKyc] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     aadhaarNumber: "",
//     panNumber: "",
//     bankAccount: "",
//     ifscCode: "",
//   });

//   const [files, setFiles] = useState({
//     aadhaar: null,
//     pan: null,
//     selfie: null,
//   });

//   /* ---------------- FETCH PROFILE ---------------- */
//   useEffect(() => {
//     if (!token) return;

//     axios
//       .get("/seller/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         console.log("Profile API response:", res.data);

//         setUser(res.data?.user ?? {});   
//         setKyc(res.data?.kyc ?? null);

//         if (res.data?.kyc) {
//           setForm({
//             aadhaarNumber: res.data.kyc.aadhaarNumber || "",
//             panNumber: res.data.kyc.panNumber || "",
//             bankAccount: res.data.kyc.bankAccount || "",
//             ifscCode: res.data.kyc.ifscCode || "",
//           });
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching profile:", err);
//       });
//   }, [token]);

//   /* ---------------- SAFE PROFILE IMAGE ---------------- */
//   const profileImage =
//     user?.profilePhoto ??
//     kyc?.selfieWithId ??
//     "/profile.jpg";

//   /* ---------------- HANDLERS ---------------- */
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFile = (e) => {
//     setFiles({ ...files, [e.target.name]: e.target.files[0] });
//   };

// //   const submitKyc = async () => {
// //     setLoading(true);
// //     try {
// //       const data = new FormData();

// //       Object.entries(form).forEach(([key, val]) => data.append(key, val));
// //       Object.entries(files).forEach(([key, val]) => {
// //         if (val) data.append(key, val);
// //       });

// //       await axios.post("/api/profile/kyc", data, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       alert("KYC Submitted Successfully");

// //       const res = await axios.get("/api/profile", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       setUser(res.data?.user ?? {});
// //       setKyc(res.data?.kyc ?? null);
// //     } catch (err) {
// //       alert(err.response?.data?.message || "KYC submission failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };


// const submitKyc = async () => {
//   setLoading(true);
//   try {
//     const data = new FormData();

//     Object.entries(form).forEach(([key, val]) => data.append(key, val));
//     Object.entries(files).forEach(([key, val]) => {
//       if (val) data.append(key, val);
//     });

//     await axios.post("/seller/profile/kyc", data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     alert("KYC Submitted Successfully");

//     const res = await axios.get("/seller/profile", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     setUser(res.data?.user ?? {});
//     setKyc(res.data?.kyc ?? null);
//   } catch (err) {
//     alert(err.response?.data?.message || "KYC submission failed");
//   } finally {
//     setLoading(false);
//   }
// };


//   /* ---------------- LOADING STATE ---------------- */
//   if (Object.keys(user).length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">

//         {/* HEADER */}
//         <div className="flex items-center gap-4 mb-8">
//           <img
//             src={profileImage}
//             className="w-20 h-20 rounded-full object-cover"
//             alt="profile"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">
//               {user?.name || "Unnamed User"}
//             </h2>
//             <p className="text-gray-500">
//               {user?.email || "No Email"}
//             </p>
//           </div>
//         </div>

//         {/* PERSONAL INFO */}
//         <h3 className="font-semibold mb-4">Personal Information</h3>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <Input label="Full Name" value={user?.name || ""} disabled />
//           <Input label="Email" value={user?.email || ""} disabled />
//           <Input label="Address" value={user?.address || ""} disabled />
//         </div>

//         {/* KYC */}
//         <h3 className="font-semibold mb-4">KYC Details</h3>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <Input name="aadhaarNumber" label="Aadhaar Number" value={form.aadhaarNumber} onChange={handleChange} />
//           <Input name="panNumber" label="PAN Number" value={form.panNumber} onChange={handleChange} />
//         </div>

//         {/* BANK */}
//         <h3 className="font-semibold mb-4">Bank Details</h3>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <Input name="bankAccount" label="Account Number" value={form.bankAccount} onChange={handleChange} />
//           <Input name="ifscCode" label="IFSC Code" value={form.ifscCode} onChange={handleChange} />
//         </div>

//         {/* UPLOADS */}
//         <h3 className="font-semibold mb-4">Upload Documents</h3>
//         <div className="grid grid-cols-3 gap-4 mb-8">
//           <FileUpload name="aadhaar" label="Aadhaar" onChange={handleFile} />
//           <FileUpload name="pan" label="PAN Card" onChange={handleFile} />
//           <FileUpload name="selfie" label="Selfie with ID" onChange={handleFile} />
//         </div>

//         <button
//           onClick={submitKyc}
//           disabled={loading}
//           className={`w-full py-3 rounded-lg ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-600 hover:bg-green-700 text-white"
//           }`}
//         >
//           {loading ? "Submitting..." : "Submit for Verification"}
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

// function Input({ label, ...props }) {
//   return (
//     <div>
//       <label className="text-sm text-gray-600">{label}</label>
//       <input
//         className="w-full mt-1 px-4 py-2 border rounded-lg"
//         {...props}
//       />
//     </div>
//   );
// }

// function FileUpload({ label, ...props }) {
//   return (
//     <div className="border-2 border-dashed rounded-lg p-4 text-center">
//       <p className="text-sm mb-2">{label}</p>
//       <input type="file" {...props} />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [kyc, setKyc] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    aadhaarNumber: "",
    panNumber: "",
    bankAccount: "",
    ifscCode: "",
  });

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    selfie: null,
  });

  /* ---------------- FETCH PROFILE ---------------- */
  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:4000/seller/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Profile API response:", res.data);

        setUser(res.data?.user || null);
        setKyc(res.data?.kyc || null);

        if (res.data?.kyc) {
          setForm({
            aadhaarNumber: res.data.kyc.aadhaarNumber || "",
            panNumber: res.data.kyc.panNumber || "",
            bankAccount: res.data.kyc.bankAccount || "",
            ifscCode: res.data.kyc.ifscCode || "",
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }, [token]);

  /* ---------------- SAFE IMAGE ---------------- */
  const profileImage =
    user?.profilePhoto ||
    kyc?.selfieWithId ||
    "/profile.jpg";

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  /* ---------------- SUBMIT KYC ---------------- */
  const submitKyc = async () => {
    setLoading(true);
    try {
      const data = new FormData();

      Object.entries(form).forEach(([key, val]) =>
        data.append(key, val)
      );
      Object.entries(files).forEach(([key, val]) => {
        if (val) data.append(key, val);
      });

      await axios.post("http://localhost:4000/seller/profile/kyc", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("KYC Submitted Successfully");

      const res = await axios.get("/seller/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data?.user || null);
      setKyc(res.data?.kyc || null);
    } catch (err) {
      alert(err.response?.data?.message || "KYC submission failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- LOADING ---------------- */
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={profileImage}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {user.name || "Unnamed User"}
            </h2>
            <p className="text-gray-500">
              {user.email || "No Email"}
            </p>
          </div>
        </div>

        {/* PERSONAL INFO */}
        <h3 className="font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Input label="Full Name" value={user.name || ""} disabled />
          <Input label="Email" value={user.email || ""} disabled />
          <Input label="Address" value={user.address || ""} disabled />
        </div>

        {/* KYC */}
        <h3 className="font-semibold mb-4">KYC Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Input
            name="aadhaarNumber"
            label="Aadhaar Number"
            value={form.aadhaarNumber}
            onChange={handleChange}
          />
          <Input
            name="panNumber"
            label="PAN Number"
            value={form.panNumber}
            onChange={handleChange}
          />
        </div>

        {/* BANK */}
        <h3 className="font-semibold mb-4">Bank Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Input
            name="bankAccount"
            label="Account Number"
            value={form.bankAccount}
            onChange={handleChange}
          />
          <Input
            name="ifscCode"
            label="IFSC Code"
            value={form.ifscCode}
            onChange={handleChange}
          />
        </div>

        {/* UPLOADS */}
        <h3 className="font-semibold mb-4">Upload Documents</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <FileUpload name="aadhaar" label="Aadhaar" onChange={handleFile} />
          <FileUpload name="pan" label="PAN Card" onChange={handleFile} />
          <FileUpload name="selfie" label="Selfie with ID" onChange={handleFile} />
        </div>

        <button
          onClick={submitKyc}
          disabled={loading}
          className={`w-full py-3 rounded-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading ? "Submitting..." : "Submit for Verification"}
        </button>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="w-full mt-1 px-4 py-2 border rounded-lg"
        {...props}
      />
    </div>
  );
}

function FileUpload({ label, ...props }) {
  return (
    <div className="border-2 border-dashed rounded-lg p-4 text-center">
      <p className="text-sm mb-2">{label}</p>
      <input type="file" {...props} />
    </div>
  );
}
