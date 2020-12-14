import React, {Fragment} from "react";
import {TeamMember} from "../..";
import defaultAvatar from "../../assets/default-avatar.png";
import "./assets/TeamCard.scss";

export const TeamCard: React.FC<TeamCardProps> = ({member}) => {

    return (
        <Fragment>
            {
                member ?
                    <div className="team-card">
                        <div className="div-team-image">
                            <img className="team-image" src={member.imageUrl ? member.imageUrl : defaultAvatar}
                                 alt={member.name}
                            />
                            <div className="team-image-info">
                                <div className="team-image-info-content">
                                    <p><a href={"mailto:" + member.emailAddress}><i>{member.emailAddress}</i></a>
                                        <br/><br/>
                                        {member.blogUrl ? <a href={member.blogUrl}><b>MORE ABOUT ME</b></a> : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4>{member.name}</h4>
                        <p>{member.jobTitle}</p>


                    </div> : ""}
        </Fragment>
    );
}

export interface TeamCardProps {
    member?: TeamMember;
}