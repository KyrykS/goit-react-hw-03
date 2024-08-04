import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Profile.module.css';

export const Profile = ({name, tag, location, image, stats}) => {
return (
<div className={styles.profile} >
 <div className={styles.descr}>
 <img className={styles.img}
 src={image}
 alt="User avatar"
 />
 <p className={styles.name}>{name}</p>
 <p className={styles.tag}>@{tag}</p>
 <p className={styles.location}>{location}</p>
</div>

 <ul className={styles.stats}>
 <li className={styles.statsItem}>
 <span className={styles.lbl}>Followers</span>
 <span className={styles.quatity}>{stats.followers}</span>
 </li>
 <li className={styles.statsItem}>
 <span className={styles.lbl}>Views</span>
 <span className={styles.quatity}>{stats.views}</span>
 </li>
 <li className={styles.statsItem}>
 <span className={styles.lbl}>Likes</span>
 <span className={styles.quatity}>{stats.likes}</span>
 </li>
</ul>
</div>
)
}

Profile.propTypes = {
name: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
stats: PropTypes.shape({
followers: PropTypes.number.isRequired,
views: PropTypes.number.isRequired,
likes: PropTypes.number.isRequired,
}).isRequired,
};

export default Profile;