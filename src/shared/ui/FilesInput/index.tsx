import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import classes from './style.module.scss';
import crossIcon from 'shared/assets/icons/cross.svg';

interface Props {
  maxFileSize: number;
  maxFileQuantity: number;
  fileList?: FileList;
  onInput?: CallableFunction;
  filesList: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FilesInput = (props: Props) => {
  const { filesList, setFiles } = props;
  const [cumSize, setCumSize] = useState(0);
  const [numFiles, setNumFiles] = useState(0);

  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files!.length; i++) {
      const file = files?.item(i);
      if (
        file &&
        cumSize + file!.size < props.maxFileSize &&
        numFiles < props.maxFileQuantity
      ) {
        setFiles([...filesList, file]);
        setCumSize((c) => c + file!.size);
        setNumFiles((n) => n + 1);
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    const temp = [...filesList];
    const el = temp.splice(index, 1);

    setCumSize((c) => c - el.length);
    setNumFiles((n) => n - 1);
    setFiles(temp);
  };

  return (
    <div className={classes['wrapper']}>
      <label htmlFor="fileInput">
        Загрузить
        <input onChange={handleFileInput} type="file" id="fileInput" />
      </label>
      <div className={classes['file-list']}>
        {filesList.map((v, i) => (
          <div key={i} className={classes['file-name']}>
            <div className={classes['inner-name']}>
              {v.name}
              <button onClick={() => handleRemoveFile(i)}>
                <img width={27} id={'c-' + i} src={crossIcon} alt="cross-btn" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesInput;
