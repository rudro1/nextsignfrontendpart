// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5011/api', 
// });

// export const documentAPI = {
//   // ড্যাশবোর্ডে আপনি 'getDocuments' কল করছেন, তাই এখানে নাম ঠিক করে নিন
//   getDocuments: () => API.get('/documents'), 
//   uploadPdf: (formData) => API.post('/upload-pdf', formData),
//   generateLink: (data) => API.post('/generate-link', data),
//   getById: (id) => API.get(`/doc/${id}`),
//   submitSign: (id, data) => API.post(`/submit-sign/${id}`, data)
// };

// import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:5011/api' });
// export const documentAPI = {
//   getDocuments: () => API.get('/documents'),
//   uploadPdf: (formData) => API.post('/upload-pdf', formData),
//   generateLink: (data) => API.post('/generate-link', data),
//   getById: (id) => API.get(`/doc/${id}`),
//   downloadDoc: (id) => API.get(`/documents/download/${id}`), // New
//   submitSign: (id, data) => API.post(`/submit-sign/${id}`, data)
// };\
//after mail

// import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:5011/api' });

// export const documentAPI = {
//   getDocuments: () => API.get('/documents'),
//   uploadPdf: (formData) => API.post('/upload-pdf', formData),
//   generateLink: (data) => API.post('/generate-link', data),
//   getById: (id) => API.get(`/doc/${id}`),
//   downloadDoc: (id) => API.get(`/documents/download/${id}`),
//   submitSign: (id, data) => API.post(`/submit-sign/${id}`, data),
//   verifyOtp: (data) => API.post('/verify-otp', data) // Important fix
// };



//deploy
// import axios from 'axios';

// const API = axios.create({ 
//   baseURL: 'https://nextsignbackemd.onrender.com/api' 
// });

// export const documentAPI = {
//   getDocuments: () => API.get('/documents'),
//   uploadPdf: (formData) => API.post('/upload-pdf', formData),
//   generateLink: (data) => API.post('/generate-link', data),
//   getById: (id) => API.get(`/doc/${id}`),
//   downloadDoc: (id) => API.get(`/documents/download/${id}`),
//   submitSign: (id, data) => API.post(`/submit-sign/${id}`, data),
//   verifyOtp: (data) => API.post('/verify-otp', data)
// };
// src/api/api.js
// import axios from 'axios';

// const API = axios.create({ 
//   baseURL: 'https://nextsignbackend-bisal-sahas-projects.vercel.app/api', // No trailing slash
//   withCredentials: true 
// });

// export const documentAPI = {
//   getDocuments: () => API.get('/documents'),
//   generateLink: (data) => API.post('/generate-link', data),
//   getById: (id) => API.get(`/doc/${id}`),
//   submitSign: (id, data) => API.post(`/submit-sign/${id}`, data),
//   verifyOtp: (data) => API.post('/verify-otp', data)
// };
import axios from 'axios';

const API = axios.create({ 
  // ✅ Notun Backend URL ta ekhane update kora hoyeche
  baseURL: 'https://nexsignbackendpart.vercel.app/api', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

// Error Interceptor
API.interceptors.response.use(
  response => response,
  error => {
    // 💡 Network error ba CORS error thakle console-e bhalo bhabe dekha jabe
    console.error('API Error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export const documentAPI = {
  getDocuments: () => API.get('/documents'),
  generateLink: (data) => API.post('/generate-link', data),
  getById: (id) => API.get(`/doc/${id}`),
  submitSign: (id, data) => API.post(`/submit-sign/${id}`, data),
  verifyOtp: (data) => API.post('/verify-otp', data)
};