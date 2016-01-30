using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_02_Angular_Getting_Started.Startup))]
namespace _02_Angular_Getting_Started
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
