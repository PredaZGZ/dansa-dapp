const Weight = require('../models/Fitness/Weight');
const User = require('../models/User');

module.exports = {
    create: async (req, res) => {
        const { id, weight } = req.body;
        try {
            const user = await User.findById(id);
            const newWeight = new Weight({ user, weight });
            const savedWeight = await newWeight.save();
            return res.status(201).json({ weight: savedWeight });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const { weight } = req.body;
        try {
            const updatedWeight = await Weight.findByIdAndUpdate(req.params.id, { weight }, { new: true });
            return res.status(200).json({ weight: updatedWeight });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await Weight.findByIdAndDelete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    weightsByUser: async (req, res) => {
        try {
            const weights = await Weight.find({ user: req.params.userId });
            return res.status(200).json({ weights });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};