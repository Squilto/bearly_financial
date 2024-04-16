"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

//add a record to financial statement
const AddRecord = () = => {
    const Router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({user:'//ADD SOMETHIGN HERE AFTER THE AUTHENTICATION SHIT IS FIGURED OUT PLEASE PLASE APLSE APSLEA EPLAE', transaction:'', amount:''})
    




}