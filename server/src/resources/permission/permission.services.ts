import { Request } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";

export namespace PermissionServices {
  export const AddPermission = async (req: Request) => {
    try {
      await PermissionModel.Permission.insertMany(req.body.permissions);
      return Promise.resolve({
        message: "Permission added successfully",
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
