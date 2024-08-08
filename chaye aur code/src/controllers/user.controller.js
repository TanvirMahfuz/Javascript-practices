const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/ytvid/user.model");
const ApiError = require("../utils/apiError");
const uploadOnCloudinary = require("../utils/cloudinary");

const registerUser = asyncHandler(async (req, res) => {
    // 1. Get user from request body
    // validation
    // 2. Check if user already exists : username email
    // 3. check for images
    // 4. avatar
    // 5. upload to cloudinary
    // 6. create user object
    // 7. save user
    // 8. modify response
    const { fullName, username, email, password } = req.body;
    console.log(fullName, username, email, password);
    if (
        [fullName, username, email, password].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "all field required");
    }
    const existedUser = User.findOne({
        $or: [{ username }, { email }],
    });
    if (existedUser) {
        throw new ApiError(409, "User already exists");
    }
    const avatartLocalpath = req.files?.avatar[0]?.path;
    const coverImageLocalpath = req.files?.coverImage[0]?.path;
    if (!avatartLocalpath) {
        throw new ApiError(400, "All field required");
    }
    const avatar = await uploadOnCloudinary(avatartLocalpath);
    const coverImage = await uploadOnCloudinary(coverImageLocalpath);
    if (!avatar) {
        throw new ApiError(400, "All field required");
    }
    const user = await User.create({
        fullName,
        username,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
    });
    res.status(200).json({
        message: "User registered successfully",
    });
});

module.exports = registerUser;
