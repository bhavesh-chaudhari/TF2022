// helper functions

export const registerView = async () => {
  const res = await fetch("http://localhost:3000/api/v1/views", {
    method: "POST",
  });
  const data = await res.json();
};
