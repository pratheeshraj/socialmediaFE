import React from 'react'
import './Story.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User,story } from '../../data'
import { faAdd } from '@fortawesome/free-solid-svg-icons';
const Story = () => {
    return (
        <div className='story'>
            <Tabs>
                <TabList>
                    <Tab>Story</Tab>
                    <Tab>Reels</Tab>
                    <Tab>Rooms</Tab>
                </TabList>

                <TabPanel>
                    <div className='storygroups'>
                        <div className='storygroup'>
                            <div className='storycard'>
                                <label htmlFor='add'>
                                    <div className='storybody'>
                                        <img src="./assert/image/user/raj.jpg" alt="" className='storybodyimg' />
                                    </div>
                                    <div className='storyfooter'>
                                        <FontAwesomeIcon icon={faAdd} />
                                        <h4 className='storytitle'>Create a story</h4>
                                    </div>
                                </label>
                                <input type="file" id='add' className='hidden' />
                            </div>
                        </div>
                       {
                       story.map((s)=>(
                            <div className='storygroup'>
                            <div className='storydiv'>
                                <div className='storyuserimgdiv'>
                                    <img src={User.filter((user)=>user.id===s?.userId)[0].profileimg} alt="" className='storyuserimg' />
                                </div>
                                <div className='storyuser'>
                                    <img src={s.image} alt="" />
                                </div>
                                <div className='storyusertittle'>
                                    <h5>{User.filter((user)=>user.id===s?.userId)[0].username}</h5>
                                </div>
                            </div>
                        </div>
                        ))
                       }
                      
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Story