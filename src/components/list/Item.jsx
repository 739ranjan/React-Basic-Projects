const Item = ({item}) => {
    return(
        <div className="list-group list-group-radio d-grid border-0">
            <div className="d-flex border rounded p-3 my-2">
            <div className=" d-flex justify-content-between gap-5 align-items-center">
                <div className='bg-black rounded text-white p-2 date-info'>
                    <span>{item.itemMonth}</span><br />
                    <span>{item.itemDate}</span><br />
                    <span>{item.itemYear}</span>
                </div>
                <h1 >{item.itemName}</h1>
            </div>
            </div>
        </div>
    )
}

export default Item;