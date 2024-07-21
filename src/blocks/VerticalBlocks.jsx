import React, {useContext, useState} from 'react';
import AppContext from '../providers';


export default function VerticalBlocks({background}) {
    const { location, setlocation, clearlocation, locationlist } = useContext(AppContext);

    return (
        <div className="vertical_blocks_wrap">
            <div className="vb_inner" style={{
                background:`url(${background.url})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
            }}>
                <div class="vb_panel_container">
                <div className="vb_panel">
                    <div className="vb_panel_inner"
                    >
                        <div className="vb_panel_inner_inner"
                            style={{
                                background:"url('./temp.jpg')",
                                backgroundSize:'cover',
                                backgroundPosition:'center'
                            }}
                        >
                            <div className="vb_box_1">
                                <span className="vb_line">PREMIUM QUALITY</span>
                                <span className="vb_line">CANNABIS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vb_panel">
                    <div className="vb_panel_inner"
                    >
                        <div className="vb_panel_inner_inner"
                            style={{
                                background:"url('./temp.jpg')",
                                backgroundSize:'cover',
                                backgroundPosition:'center'
                            }}
                        >
                            <div className="vb_box_1">
                                <span className="vb_line">PREMIUM QUALITY</span>
                                <span className="vb_line">CANNABIS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vb_panel">
                    PANEL!
                </div>

                </div>
            </div>
        </div>
    )
}