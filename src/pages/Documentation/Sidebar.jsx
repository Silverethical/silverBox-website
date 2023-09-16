import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import propTypes from "prop-types";

const generateMenuItems = (configs, onItemClick) => {
    return configs.map((config) => {
        if (config.config) {
            return (
                <SubMenu key={config.configName} label={config.configName}>
                    {generateMenuItems(config.config, onItemClick)}
                </SubMenu>
            );
        } else {
            return (
                <MenuItem
                    key={config.configName}
                    onClick={() => onItemClick(config.explanation)}
                >
                    {config.configName}
                </MenuItem>
            );
        }
    });
};

const PageContent = ({ content }) => {
    return <div>{content}</div>;
};

const SideBar = ({ config }) => {
    const [pageContent, setPageContent] = useState("");

    const handleMenuItemClick = (explanation) => {
        setPageContent(explanation);
    };

    return (
        <>
            {config && (
                <Sidebar>
                    <Menu iconShape="square">
                        {generateMenuItems(config, handleMenuItemClick)}
                    </Menu>
                </Sidebar>
            )}
            {pageContent && <PageContent content={pageContent} />}
        </>
    );
};

SideBar.propTypes = {
    config: propTypes.object,
};

export default SideBar;
