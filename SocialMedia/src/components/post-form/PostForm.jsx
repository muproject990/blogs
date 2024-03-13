import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'

import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PostForm = ({post}) => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title:''
        }
    })
    return (
        <div>

        </div>
    )
}

export default PostForm
