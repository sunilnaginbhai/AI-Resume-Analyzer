import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export const meta = () => [
{ title: 'Resumind | Auth' },
{ name: 'description', content: 'Log into your account' },
];

const Auth = () => {
const { isLoading, auth } = usePuterStore();
const location = useLocation();
const navigate = useNavigate();

// Get the page the user wanted to visit
const next = new URLSearchParams(location.search).get('next') || '/';

useEffect(() => {
if (auth.isAuthenticated) {
navigate(next, { replace: true });
}
}, [auth.isAuthenticated, next, navigate]);

return ( <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center"> <div className="gradient-border shadow-lg"> <section className="flex flex-col gap-8 bg-white rounded-lg p-10"> <div className="flex flex-col items-center gap-2 text-center"> <h1 className="text-3xl font-bold">Welcome</h1> <h2 className="text-gray-600">
Log in to continue your job journey </h2> </div>

```
      <div>
        {isLoading ? (
          <button className="auth-button animate-pulse w-full">
            <p>Signing you in...</p>
          </button>
        ) : auth.isAuthenticated ? (
          <button
            className="auth-button w-full"
            onClick={async () => {
              try {
                await auth.signOut();
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <p>Log Out</p>
          </button>
        ) : (
          <button
            className="auth-button w-full"
            onClick={async () => {
              try {
                await auth.signIn();
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <p>Sign In</p>
          </button>
        )}
      </div>
    </section>
  </div>
</main>
```

);
};

export default Auth;
