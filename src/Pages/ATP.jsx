import Header from '../components/header';
import '../css/atp.css';
import atp from '../assets/atp.png'

function ATP() {
    return (
        <>
            <div className='atp-page'>
            <Header/>
            <div className="atp-container">
                <div>
                    <h2>Details</h2>
                    <h3>Official Receipts (ATP)</h3>
                    <p>-Decription-</p>
                    <img src={atp} alt="ATP Sample" />
                </div>

                <div className="atp-form-section">
                    <div className="atp-flex-row">
                        <div>
                            <label>Name</label>
                            <input type="text"  placeholder='Name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>

                    <div className="atp-flex-row">
                        <div>
                            <label>Business Name</label>
                            <input type="text" placeholder="-Business name-" />
                        </div>
                        <div>
                            <label>Contact Number</label>
                            <input type="text" placeholder='Number' />
                        </div>
                    </div>

                    <div>
                        <label>Location</label>
                        <input type="text" placeholder='Location'/>
                    </div>

                    <div className="atp-flex-row">
                        <div className="atp-status-box">
                            <p><strong>Urgency</strong></p>
                            <p>📶 Minor</p>
                        </div>
                        <div className="atp-status-box">
                            <p><strong>Status</strong></p>
                            <p>🔵 In review</p>
                        </div>
                    </div>

                    <div>
                        <p><strong>How would you like to submit your design?</strong></p>
                        <p><strong>Create a Design</strong> – Use our online tool to customize your print.</p>
                        <p><strong>Upload a File</strong> – Already have your layout? Upload it here.</p>
                        <div className="atp-button-row">
                            <button className="atp-button atp-create-btn">Create Design</button>
                            <label className="atp-upload-label">
                                Choose File 📁
                                <input type="file" style={{ display: 'none' }} />
                            </label>
                        </div>
                    </div>

                    <div>
                        <label>Notifications</label>
                        <textarea
                            className="atp-notification"
                            readOnly
                            value="ICONS will be making a delivery in your area, please be ready to receive your application form. Expect a call or text message from ICONS."
                        />
                    </div>

                    <p className="atp-footer-note">
                        If you have any questions, please contact #09123456789
                    </p>
                </div>
            </div>
            </div>
        </>
    );
}

export default ATP;
