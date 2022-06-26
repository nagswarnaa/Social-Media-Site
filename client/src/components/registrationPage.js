import React, { Component } from 'react';
const RegistrationPage = () => {
    return (<form >
        <h3>Registration Component</h3>
        <div class="mx-auto w-25 p-3">
            <label for="userEmail" class="form-label">Email ID</label>
            <input type="email" class="form-control" id="userEmail" placeholder="Email" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="userPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="userPassword" placeholder="Password" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="userAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="userAddress" placeholder="Street Address" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="Address" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="Address" placeholder="Suite,Apartment" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="userCity" class="form-label">City</label>
            <input type="text" class="form-control" id="userCity" placeholder="City" />
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="userState" class="form-label">State</label>
            <select id="userState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="mx-auto w-25 p-3">
            <label for="Zipcode" class="form-label">Zip Code</label>
            <input type="text" class="form-control" id="Zipcode" placeholder="Zip Code" />
        </div>

        <div class="mx-auto w-25 p-3">
            <button type="submit" class="btn btn-primary">Register</button>
        </div>
    </form>);
}

export default RegistrationPage;