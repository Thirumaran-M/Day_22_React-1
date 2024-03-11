import "./App.css";
import Card from "./Cards";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      planName: "FREE",
      price: 0,
      features: [
        {
          name: "Single User",
          enabled : true
        },
        {
          name: "50 GB storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : false
        },
        {
          name: "Dedicated Phone Support",
          enabled : false
        },
        {
          name: "Free Domain",
          enabled : false
        },
        {
          name: "Monthly Status Report",
          enabled : false
        }
      ],
    },
    {
      planName: "PLUS",
      price: 9,
      features: [
        {
          name: "5 Users",
          enabled : true
        },
        {
          name: "50 GB storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Domain",
          enabled : true
        },
        {
          name: "Monthly Status Report",
          enabled : false
        }
      ],
      buttonFocus : true
    },
    {
      planName: "PRO",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
          enabled : true
        },
        {
          name: "50 GB storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Domain",
          enabled : true
        },
        {
          name: "Monthly Status Report",
          enabled : true
        }
      ],
      buttonFocus : true,
      boxFocus : true
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;