import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className=" mainHeader">
      <div class="imagew">
        <img src={logo} class="mainImage" />
      </div>
      <div class="row">
        <div class="col first d-flex justify-content-center">
          <div class="firstMain d-flex flex-column">
            <span class="mainText text-center"></span>
            <span class="secText text-center">
            </span>

          </div>
        </div>
        <div class="col second">
          <div class="firstMain">
            <span class="signinText">Login</span>
            <div class="inputContainer d-flex flex-column">

              <div>
                <div className='logincardinals'>Login ID</div>
                <input type="text" class="username" placeholder="Enter Login ID" />
              </div>
              <div className='logincardinals'>Password</div>
              <div>
                <input type="text" class="password" placeholder="Enter Password" />

              </div>
              <div className='changepassanc' >
                <a >Change Password</a>
                </div>
              <div className='radio'>
                <input type="radio" id="html" name="fav_language" value="HTML" className='radioval' />
        
                <label for="html">Remember Me</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Agree to <a className='anchorlinck'>Terms and Conditions</a></label><br />
              </div>
              <button class="btnClick">Login</button>
            </div>
            <div className='last'>
              <span className='lasttext'> Don't have an account? <a className='anchorlinck'>Register Here</a> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
