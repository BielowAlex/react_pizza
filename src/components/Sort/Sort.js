import React, {useEffect, useRef, useState} from 'react';

const Sort = ({setSort}) => {
    const sortRef = useRef();

    const sort = [
        {id: 0, name: 'popularity'},
        {id: 1, name: 'price'},
        {id: 2, name: 'alphabetically'}
    ];
    const [sortCategory, setSortCategory] = useState(sort[0]);
    const [showHidePopup,setShowHidePopup] = useState(false);

    const selectSort = (cat)=>{
        setSortCategory(cat);
        setShowHidePopup(false);
        setSort(cat.id)
    }
    const outsideClick = (e)=>{
        if(!e.path.includes(sortRef.current)){
            setShowHidePopup(false)
        }
    };

    useEffect(() => {
        document.body.addEventListener('click',outsideClick)
    }, []);

    // setSortCategory(sort[0]);
    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    className={showHidePopup?'rotate':''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sort by:</b>
                <span onClick={()=>setShowHidePopup(!showHidePopup)}>{sortCategory && sortCategory.name}</span>
            </div>
            {showHidePopup && <div className='sort__popup'>
                <ul>
                    {sort.map(cat => <li onClick={() => selectSort(cat)}
                                         className={sortCategory && sortCategory.id === cat.id ? 'active' : ''}
                                         key={cat.id}>{cat.name}</li>)}
                </ul>
            </div>}
        </div>
    );
};


export {Sort};
