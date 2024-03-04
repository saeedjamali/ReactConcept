
'use client';

import { Button, Modal } from 'flowbite-react';
import CharacterItem from './CharacterItem';
import { IoEyeSharp, IoTrash, IoTrashBinOutline } from 'react-icons/io5';


// https://www.flowbite-react.com/docs/components/modal
export default function Modals({ open, onOpen, favorites, onDeleteFavorites }) {
    // const [openModal, setOpenModal] = useState(false);


    return (
        <>
            {/* <Button onClick={() => onOpen(true)}>Toggle modal</Button> */}
            <Modal dismissible show={open} onClose={() => onOpen(false)}>
                <Modal.Header>List of Favorites</Modal.Header>
                <Modal.Body>
                    {
                        favorites.length == 0 ? <p className='font-bold flex items-center justify-center'>Favorites is Empty</p> : ""
                    }
                    <div className="space-y-6">
                        <div>



                            {

                                favorites.map((fav) => <CharacterItem key={fav.id} character={fav} >
                                    <span className="mr-4 text-red-500 text-xl">
                                        {<IoTrash onClick={() => onDeleteFavorites(fav.id)} />}
                                    </span>
                                </CharacterItem>)
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onOpen(false)}>I accept</Button>
                    <Button color="gray" onClick={() => onOpen(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
