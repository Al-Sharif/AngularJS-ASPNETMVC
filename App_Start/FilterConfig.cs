using System.Web;
using System.Web.Mvc;

namespace _02_Angular_Getting_Started
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
