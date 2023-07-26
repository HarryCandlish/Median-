const Registration = () => {
  return (
    <form>
    <div>
      <h1>Registration</h1>
            <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            required/>
    </div>
    <div>
            <input
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            required/>
    </div>
    <div>
            <input
            type="text"
            placeholder="Confirm Password"
            name="confirm_password"
            id="confirm_password"
            required/>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
  )
}

export default Registration