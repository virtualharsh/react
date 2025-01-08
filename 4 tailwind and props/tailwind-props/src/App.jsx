import Card from './components/Card'

function App() {

    const userDetails = [
        {
            name: "Harsh",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        },
        {
            name: "Hii",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        },
        {
            name: "Hello",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        }
    ]

    return (
        <>
            <div className='w-full p-10 flex gap-x-2 justify-evenly flex-wrap'>
                {
                    (() => {
                        const cards = [];
                        userDetails.forEach((user, index) => {
                            cards.push(<Card key={index} userDetails={user} />);
                        });
                        return cards;
                    })()
                }
            </div>
        </>
    )
}

export default App
