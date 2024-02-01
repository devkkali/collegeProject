"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubController = void 0;
const club_services_1 = require("./club.services");
var ClubController;
(function (ClubController) {
    ClubController.CreateClub = async (req, res, next) => {
        try {
            res.status(201).json(await club_services_1.ClubServices.CreateClub(req));
        }
        catch (e) {
            next(e);
        }
    };
    ClubController.GetClub = async (req, res, next) => {
        try {
            res.status(200).json(await club_services_1.ClubServices.GetClub(req));
        }
        catch (e) {
            next(e);
        }
    };
    ClubController.DeleteClub = async (req, res, next) => {
        try {
            res.status(202).json(await club_services_1.ClubServices.DeleteClub(req));
        }
        catch (e) {
            next(e);
        }
    };
    ClubController.UpdateClub = async (req, res, next) => {
        try {
            res.status(200).json(await club_services_1.ClubServices.UpdateClub(req));
        }
        catch (e) {
            next(e);
        }
    };
})(ClubController || (exports.ClubController = ClubController = {}));
