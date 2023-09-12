/*import { useState } from "react";
import { cliente } from "../supabase/cliente";

function Login() {
  const [email, setEmail] = useState("");
  const HandleSumit = async (e) => {
    e.preventDefault();

    try {
         await cliente.auth.signInWithOtp({
        email,
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={HandleSumit}>
        <input
          type="email"
          name="email"
          placeholder="email@gmil.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>send</button>
      </form>
    </div>
  );
}

export default Login;

no se porque  no funciona
*/
