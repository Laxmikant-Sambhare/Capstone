import React, { useState } from "react";
import Form from "./Form";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "./Rescue.css";
