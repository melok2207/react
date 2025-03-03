import React, { useState } from "react";
   import "./UserForm.css";

   const UserForm = () => {
       const [formData, setFormData] = useState({
           firstName: "",
           lastName: "",
           groupCode: "",
           email: "",
       });

       const handleChange = (e) => {
           const { name, value } = e.target;
           setFormData({ ...formData, [name]: value });
       };

       return (
           <div className="user-form-container">
               <h2>Форма користувача</h2>
               <form>
                   <label>Ім'я:
                       <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                   </label>
                   <label>Прізвище:
                       <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                   </label>
                   <label>Код групи:
                       <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
                   </label>
                   <label>Електронна пошта:
                       <input type="email" name="email" value={formData.email} onChange={handleChange} />
                   </label>
               </form>
               <div className="user-data">
                   <h3>Введені дані:</h3>
                   <ul>
                       <li>Ім'я: {formData.firstName}</li>
                       <li>Прізвище: {formData.lastName}</li>
                       <li>Код групи: {formData.groupCode}</li>
                       <li>Email: {formData.email}</li>
                   </ul>
               </div>
           </div>
       );
   };
