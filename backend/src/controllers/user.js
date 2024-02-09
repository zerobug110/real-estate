exports.getUserCtrl = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "get all admin successfully"
        })
    } catch (error) {
        
    }
}