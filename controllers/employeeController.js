import Employee from "../models/Employee.js";
import bigPromise from "../middlewares/bigPromise.js";
import Department from "../models/headers/department.js";
import User from "../models/User.js"

const getDetails = async (emp) => {
    const [data1, data2 ] = await Promise.all([
        Department.findById(emp.departmentId).catch(err => {
            console.log(`error getting department with id :: ${emp.departmentId} :: ${err}`)
            return null
        }),
        User.findById(emp.userId).catch(err => {
            console.log(`error getting User with id :: ${emp.userId} :: ${err}`)
            return null
        })
    ])
    return { data1, data2 }
}



export const addEmployee = bigPromise(async(req,res,next)=>{
    const {employeeId,userId,firstName,lastName,departmentId,band,email,roles,phoneNumber,address1,address2,city,state,postalCode} = req.body;
    if (!firstName || !lastName || !band ) {
        return res.status(400).json({
            success: false,
            message: "Bad Request"
        })
    }

    const emp = await Employee.create({
        employeeId,userId,firstName,lastName,departmentId,band,email,roles,
        phoneNumber,address1,address2,city,state,postalCode
    }).catch(err => {
        console.log(`error creating jobs :: ${err}`)
        return null
    })

    if (emp === null) {
        return res.status(501).json({
            success: false,
            message: "Internal server error",
        })
    }

    res.status(201).json({
        success: true,
        message: "Employee Added Successfully !",
        data: emp
    })
})

export const getAllEmployee = bigPromise(async(req,res,next)=>{
    const allEmployee = await Employee.find({}).lean().catch(err => {
        console.log(`error getting employees :: ${err}`)
        return null
    })

    if(allEmployee === null){
        return res.status(501).json({
            success: false,
            message: "Internal server error!"
        })
    }

    res.status(201).json({
        success:true,
        data: allEmployee
    })

})
export const updateEmployeeById = bigPromise(async (req, res, next) => {
    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(401).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        employeeId:req.body.employeeId,
        userId:req.body.userId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        departmentId:req.body.departmentId,
        band:req.body.band,
        email:req.body.email,
        roles:req.body.roles,
        phoneNumber:req.body.phoneNumber,
        address1:req.body.address1,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        postalCode:req.body.postalCode
    }

    const emp = await Employee.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    }).catch(err=>{
        console.log(`error updating works shift :: ${ws}`);
        return null
    })

    if(emp===null){
        return res.status(501).json({
            success:false,
            message:"Internal server error"
        })
    }

    res.status(201).json({
        success: true,
        data:emp
    })
})

export const getEmployeeById = bigPromise(async (req, res, next) => {

    const { id } = req.params

    let emp = await Employee.findById(req.params.id).catch(err => {
        console.log(`error getting employee by id :: ${id} :: ${err}`)
        return null;
    })

    if (!emp) {
        return res.status(501).json({
            success: false,
            mesage: "Internal Server Error"
        })
    }

    const [data1, data2] = await Promise.all([
        Department.findById(emp.departmentId).catch(err => {
            console.log(`error getting department with id :: ${emp.departmentId} :: ${err}`)
            return null
        }),
        User.findById(emp.userId).catch(err => {
            console.log(`error getting User with id :: ${emp.userId} :: ${err}`)
            return null
        })
    ])

    res.status(201).json({
        success: true,
        data: {
            emp: emp,
            departmentId: data1?._id,
            userId: data2?._id
        }
    })
})

