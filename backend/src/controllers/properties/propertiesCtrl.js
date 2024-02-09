exports.propertiesCtrl = async (req, res) => {
    try {
        res.status(200).json({
            message: "success",
            data: {
                data: "properties"
            }
        })
    } catch (error) {
        
    }
}