const { createAdmin, uploadAdmin, deleteAdmin, getAdmin, getAdmins } = require("../../services/AdminService");

const createNewAdmin = async (_, {data}) => {
  const admin = await createAdmin(data);
  return admin;
};

const updateOneAdmin = async (_, {id, data}) => {
  const admin = await uploadAdmin(id, data);
  return admin;
};

const deleteOneAdmin = async (_, {id}) => {
  const admin = await deleteAdmin(id);
  return admin;
};

const getOneAdmin = async (_, {id}) => {
  const admin = await getAdmin(id);
  return admin;
};

const getAllAdmins = async () => {
  const admins = await getAdmins();
  return admins;
};

module.exports = {
  createNewAdmin,
  updateOneAdmin,
  deleteOneAdmin,
  getOneAdmin,
  getAllAdmins
};