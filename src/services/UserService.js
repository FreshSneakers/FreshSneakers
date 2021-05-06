import { create } from "../services/BaseService";

const http = create();

export const getUserInfo = () => {
  return http.get("/user/me");
};

export const editProfile = (body) => {
  return http.post('/profile',body);
};

export const contact = (body) => {
  return http.post('/contact', body)
}
