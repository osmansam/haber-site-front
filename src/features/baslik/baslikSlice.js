import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const initialState = {
  isLoading: false,
  basliks: [],
  baslik: {},
  type: "",
  title: "",
  content: "",
  image: "",
  imageWidth: "",
  imageHeight: "",
  date: "",
};
//create baslik
export const createBaslik = createAsyncThunk(
  "baslik/createBaslik",
  async (baslik, thunkAPI) => {
    try {
      const resp = await axios.post(`api/v1/basliks/`, baslik);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
//get all basliks
export const getAllBasliks = createAsyncThunk(
  "baslik/getAllBasliks",
  async (type, thunkAPI) => {
    try {
      const resp = await axios.get(`api/v1/basliks/`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//delete baslik
export const deleteBaslik = createAsyncThunk(
  "baslik/deleteBaslik",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`api/v1/basliks/${id}`);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
//update baslik
export const updateBaslik = createAsyncThunk(
  "baslik/updateBaslik",
  async (baslik, thunkAPI) => {
    try {
      const resp = await axios.patch(`api/v1/basliks/${baslik.id}`, baslik);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const baslikSlice = createSlice({
  name: "baslik",
  initialState,
  reducers: {
    setBaslikType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBaslik.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBaslik.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Başlık başarıyla oluşturuldu.");
      })
      .addCase(createBaslik.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBaslik.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Başlık oluşturulamadı.");
      })
      .addCase(getAllBasliks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBasliks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.basliks = action.payload;
      })
      .addCase(getAllBasliks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBaslik.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBaslik.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Başlık başarıyla silindi.");
      })
      .addCase(deleteBaslik.rejected, (state) => {
        state.isLoading = false;
        toast.error("Başlık silinemedi.");
      })
      .addCase(updateBaslik.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBaslik.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Başlık başarıyla güncellendi.");
      })
      .addCase(updateBaslik.rejected, (state) => {
        state.isLoading = false;
        toast.error("Başlık güncellenemedi.");
      });
  },
});

export const { setBaslikType } = baslikSlice.actions;
export default baslikSlice.reducer;
