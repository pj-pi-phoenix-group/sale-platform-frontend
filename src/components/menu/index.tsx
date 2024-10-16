
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


import { Logo, Category, MenuItem, ContainerMenu, TitleCategory } from "./styled"
import { MenuInstitutionIcon } from '../../assets/assets';



export default function Menu() {
    const [menu] = useState(loadMenu());
    const navigate = useNavigate();
    const [itemSelected, setItemSelected] = useState('');

    function isSelected(item:any) {
        return (itemSelected === item);
    }

    function select(item:string) {
        setItemSelected(item);
    }

    function loadMenu() {
        return [
            {
                category: 'Dashboard',
                itens: [
                    { to: '/product', name: 'Produtos', icon: <MenuInstitutionIcon /> },
                    { to: '/stock', name: 'Estoque', icon: <MenuInstitutionIcon /> },
                    { to: '/users', name: 'Usuários', icon: <MenuInstitutionIcon /> },
                    { to: '/share', name: 'Compartilhar', icon: <MenuInstitutionIcon /> },
                ]
            },
            {
                category: 'Preferências',
                itens: [
                    { to: '/', name: 'Configurações', icon: <MenuInstitutionIcon /> },
                    { to: '/', name: 'Ajuda', icon: <MenuInstitutionIcon /> },
                ]
            },
            {
                category: 'Conta',
                itens: [
                    { to: '/admin/login', name: 'Sair', icon: <MenuInstitutionIcon /> }
                ]
            }
        ]
    }

    useEffect(() => {
        select(loadMenu()[0].itens[0].name)
        navigate('/login')
    }, [])

    return (
        <ContainerMenu>
            <Link to="/admin">
                <Logo>
                    PHOENIX
                </Logo>
            </Link>
        
            {menu.map(x => 
                <div key={x.category}>
                    <TitleCategory>
                        {x.category}
                    </TitleCategory>
                    <Category>
                        {x.itens.map(x => 
                            x.name !== 'Sair' ? 
                            ( 
                                <Link to={x.to} key={x.name}>
                                    <MenuItem onClick={() => select(x.name)} isSelected={isSelected(x.name)}>
                                        {x.icon}
                                        {x.name}
                                    </MenuItem>
                                </Link>
                            )
                            : 
                            (
                                <MenuItem isSelected={false} onClick={() => {alert()}}>
                                    {x.icon}
                                    {x.name}
                                </MenuItem>
                            ) 
                    )}
                    </Category>
                </div>    
            )}
        </ContainerMenu>
    )

}