import React, { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, useRef, useState } from 'react';
import classes from './style.module.scss';
import crossIcon from 'shared/assets/icons/cross.svg';

interface Props {
    maxFileSize: number,
    maxFileQuantity: number,
    fileList?: FileList
}

const FileInput = (props: Props) => {
    const [filesList, setFiles] = useState<any[]>([]) // сюда класть файлы проекта
    const [cumSize, setCumSize] = useState(0)
    const [numFiles, setNumFiles] = useState(0)
    
    const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        for (let i = 0; i < files!.length; i++) {
            const file = files?.item(i)
            if (cumSize + file!.size < props.maxFileSize && numFiles < props.maxFileQuantity) {
                setFiles([...filesList, file])
                setCumSize(c => c + file!.size)
                setNumFiles(n => n + 1)
            }
        }
    }

    const handleRemoveFile = (index: number) => {
        const temp = filesList
        const el = temp.splice(index, 1)

        setCumSize(c => c - el.size)
        setNumFiles(n => n - 1)
        setFiles([...temp])
    }

    return (
        <div className={classes['wrapper']}>
            <label htmlFor="fileInput">
                Загрузить
                <input onChange={ handleFileInput } type="file" id="fileInput" />
            </label>
            <div className={classes['file-list']}>
                { filesList.map((v, i) => (
                    <div key={ i } className={classes['file-name']}>
                        <div className={classes['inner-name']}>
                            { v.name } 
                            <button onClick={ () => handleRemoveFile(i) }>
                                <img width={27} id={'c-' + i} src={crossIcon} alt="cross-btn" />
                            </button>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
};

export default FileInput;
