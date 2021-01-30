import Store from "electron-store";

const store = new Store();

// トークン保存
export const setToken = (token: any) => {
  return store.set("token", token);
};

// トークン取得
export const getToken = () => {
  try {
    return store.get("token");
  } catch {
    return false;
  }
};
// トークン削除
export const deleteToken = () => {
  store.delete("token");
};