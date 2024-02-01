"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const player_services_1 = require("./player.services");
var PlayerController;
(function (PlayerController) {
    PlayerController.CreatePlayer = async (req, res, next) => {
        try {
            res.status(201).json(await player_services_1.PlayerServices.CreatePlayer(req));
        }
        catch (e) {
            next(e);
        }
    };
    PlayerController.GetPlayer = async (req, res, next) => {
        try {
            res.status(200).json(await player_services_1.PlayerServices.GetPlayer(req));
        }
        catch (e) {
            next(e);
        }
    };
    PlayerController.DeletePlayer = async (req, res, next) => {
        try {
            res.status(202).json(await player_services_1.PlayerServices.DeletePlayer(req));
        }
        catch (e) {
            next(e);
        }
    };
    PlayerController.UpdatePlayer = async (req, res, next) => {
        try {
            res.status(200).json(await player_services_1.PlayerServices.UpdatePlayer(req));
        }
        catch (e) {
            next(e);
        }
    };
})(PlayerController || (exports.PlayerController = PlayerController = {}));
