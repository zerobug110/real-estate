exports.CreateClientCtrl = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "user created successfully"
        })
    } catch (error) {
        
    }
}

exports.getAllClientsCtrl = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "get client successfully"
        })
    } catch (error) {
        
    }
}

exports.getClientsCtrl = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "get all client successfully"
        })
    } catch (error) {
        
    }
}

exports.updateClientCtrl = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "client updated successfully"
        })
    } catch (error) {
        
    }
}

exports.deleteClientCtrl = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "client deleted successfully"
        })
    } catch (error) {
        
    }
}