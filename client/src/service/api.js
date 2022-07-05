import axios from "axios";

const url = "http://localhost:8000";
export const uploadImageAPI = async (file) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/file/upload",
      data: file,
    });
    const image = res.data.image;
    return image;
  } catch (error) {
    console.log(error);
  }
};

export const helperGetBlogDetail = async (blogId) => {
  try {
    const res = await axios({
      method: "get",
      url: url + `/detail/${blogId}`,
    });
    let blog = res.data.blog;
    return blog;
  } catch (error) {
    console.log(error);
  }
};
