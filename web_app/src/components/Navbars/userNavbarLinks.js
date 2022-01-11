import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import '../../assets/css/custom.css'
import { isMobile } from "react-device-detect";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import swalReact from "@sweetalert/with-react";
import Search from '@material-ui/icons/Search'
import uaDefault from '../../assets/img/default-icon.png'
import mmDefault from '../../assets/img/mm-icon.png'

// core components
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-dashboard-pro-react/components/userNavbarLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
    const [searchBarVal, setSearchBarVal] = React.useState('')
    const connect = "Connect"

    // const handleSearchBar = (e) => {
    //   console.log(e.target.value);
    //   setSearchBarVal(e.target.value);
    // };

    const login = () => {
        swalReact({
            title: "Connect to Wallet",
            button: false,
            content: 
        <div className="flexColumnWithGap">
            <div className="flexRowButtonsSwal"
            onClick={() => {
                swalReact.close()
                window.dispatchEvent(props.mmLogin)
                }
            }
            >
            <img className="swalButtonImage" src={mmDefault}/>
            Connect With MetaMask
            </div>

            <div
            onClick={() => {
                swalReact.close()
                window.dispatchEvent(props.udLogin)
                }
            }
            className="flexRowButtonsSwal"
            >
            <img className="swalButtonImage" src={uaDefault}/>
            Login With Unstoppable
            </div>
        </div> 
        })
    }

    const classes = useStyles()
    const { rtlActive } = props
    const searchButton =
        classes.top +
        ' ' +
        classes.searchButton +
        ' ' +
        classNames({
            [classes.searchRTL]: rtlActive,
        })
    // const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    //   [classes.dropdownItemRTL]: rtlActive,
    // });
    const wrapper = classNames({
        [classes.wrapperRTL]: rtlActive,
    })
    // const managerClasses = classNames({
    //   [classes.managerClasses]: true,
    // });
    return (
        <>
                <div className={wrapper}>
                    {props.signedInWith === "UD" 
                    ?  <> 
                    <div
                    className="flexRowButtons"
                    onClick={() => login()}
                >
                    <img className="udButton" src={uaDefault}/>
                    {props.udSub}
                </div> </> : props.signedInWith === "MM" && props.addr !== null
                ? <>
                    <div className="flexRowMMButtons"
                    onClick={() => login()}
                >
                    <img className="mmButton" src={mmDefault}/>
                    {`${props.addr.substring(0,4)}...${props.addr.substring(props.addr.length-4, props.addr.length)}`}
                </div>
                </> : <>
                <Button color="success"
                    className="connectWallet"
                    onClick={() => login()}
                >
                    Connect Wallet
                </Button>
                </>
                    }
                    
                </div>
        </>
    )
}

HeaderLinks.propTypes = {
    rtlActive: PropTypes.bool,
}
