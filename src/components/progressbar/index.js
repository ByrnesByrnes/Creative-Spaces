import React from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { useStorage } from '../../hooks'

export default function ProgressBar({file, setFile, ...restProps}) {

    const { url, progress} = useStorage(file)

    console.log(progress, url)


    return { url }, (
        <div {...restProps} className="">progress</div>
    )
}