import Item from "./Item";

const List = () => {
    const items = [
        {
            itemName: 'Nirma',
            itemMonth: 'September',
            itemYear: 2005,
            itemDate: '23'
        },
        {
            itemName: 'Tide',
            itemMonth: 'June',
            itemYear: 1997,
            itemDate: '12'
        },
        {
            itemName: 'Surf Excel',
            itemMonth: 'December',
            itemYear: 1995,
            itemDate: '12'
        },
        {
            itemName: 'Ghari',
            itemMonth: 'January',
            itemYear: 2012,
            itemDate: '02'
        },
        {
            itemName: 'Easy',
            itemMonth: 'October',
            itemYear: 2007,
            itemDate: '22'
        },
    ];

    return(
        <div className="modal-dialog mt-5" role="document">
            <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-center">
                    <div className="list-group list-group-radio d-grid border-0">
                        {
                            items.map( (item) => <Item key={item.itemName} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;