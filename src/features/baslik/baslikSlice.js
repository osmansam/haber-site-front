import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";
