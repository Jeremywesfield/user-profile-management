import React from "react";

const AppContext = React.createContext({
  isLoggedIn: "",
  setIsLoggedIn: "",
  userName: "",
  setUserName: "",
  firstName: "",
  setFirstName: "",
  lastName: "",
  setLastName: "",
  editProfile: "",
  setEditProfile: "",
  isAdmin: "",
  setIsAdmin: "",
  isAdminSelected: "",
  setIsAdminSelected: "",
  petData: "",
  setPetData: "",
  myProfile: "",
  setMyProfile: "",
  myPets: "",
  setMyPets: "",
  currentPage: "",
  setCurrentPage: "",
  phone: "",
  setPhone: "",
  id: "",
  setId: "",
  type: "",
  setType: "",
  name: "",
  setName: "",
  userData: "",
  setUserData: "",
  userPhoto: "",
  setUserPhoto: "",
});

export default AppContext;