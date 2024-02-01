"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const match_services_1 = require("./match.services");
var MatchController;
(function (MatchController) {
    MatchController.CreateMatch = async (req, res, next) => {
        try {
            res.status(201).json(await match_services_1.MatchServices.CreateMatch(req));
        }
        catch (e) {
            next(e);
        }
    };
    MatchController.GetMatch = async (req, res, next) => {
        try {
            res.status(200).json(await match_services_1.MatchServices.GetMatch(req));
        }
        catch (e) {
            next(e);
        }
    };
    MatchController.DeleteMatch = async (req, res, next) => {
        try {
            res.status(202).json(await match_services_1.MatchServices.DeleteMatch(req));
        }
        catch (e) {
            next(e);
        }
    };
    MatchController.UpdateMatch = async (req, res, next) => {
        try {
            res.status(200).json(await match_services_1.MatchServices.UpdateMatch(req));
        }
        catch (e) {
            next(e);
        }
    };
})(MatchController || (exports.MatchController = MatchController = {}));
