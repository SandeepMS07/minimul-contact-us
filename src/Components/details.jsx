let formData = [
    {
      inputname: "Name",
      name: "username",
      type: "text",
      id: "username",
      placeholder: "Your name",
      req: "*Name is required",
      inpval: "80",
      msg: "*Maximum 10 characters",
      state : "username",
      set:"setusername"
    },
    {
      inputname: "Email",
      name: "email",
      type: "email",
      id: "email",
      placeholder: "you@company.com",
      req: "*Email is required",
      inpval: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
      msg: "*Enter valid email address",
      state : "email",
      set  : "setemail"
    },
    {
      inputname: "Phone number",
      name: "phonenumber",
      type: "tel",
      id: "phonenumber",
      placeholder: "+91 xxxxxxxxxx",
      req: "*Phone is required",
      inpval: "/^[6-9][0-9]{9}$/g",
      msg: "*Enter valid mobile number",
      state : "phonenumber",
      set  : "setphonenumber"
    },
  ];
  
  export default formData;
  