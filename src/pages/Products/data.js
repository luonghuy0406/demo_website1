import pump from "./images/lines/Pump.png";
import cpnp from "./images/lines/Chart Paper & Pen.png";
import cr from "./images/lines/Chart Recorder.png";
import ther from "./images/lines/Thermometer.png";
import thph from "./images/lines/Thermoplastic high-pressure hose.png";
import val from "./images/lines/Valve & Control.png";

import Model_335 from "./images/PUMP/Model_335.png";
import Model_323 from "./images/PUMP/Model_323.png";
import Model_6041 from "./images/PUMP/Model_6041.jpg";
import Model_281 from "./images/PUMP/Model_281.jpg";
import Model_1011 from "./images/PUMP/Model_1011.png";

import CO2 from "./images/PUMP/CO2.png";
import ATEX from "./images/PUMP/ATEX.png";
import High from "./images/PUMP/High.png";
import TEG from "./images/PUMP/TEG.png";

import Model1570 from "./images/PUMP/Model1570.png";
import Model2SF11ES from "./images/PUMP/Model2SF11ES.png";
import Model2537 from "./images/PUMP/Model2537.jpg";
import Model3541 from "./images/PUMP/Model3541.png";
import Model2SF05SEEL from "./images/PUMP/Model2SF05SEEL.jpeg";

import air_main from "./images/PUMP/air_main.png";
import a7A_DS_8 from "./images/PUMP/7A-DS-8.jpeg";
import a5A_DS_5 from "./images/PUMP/5A-DS-5.png";
import a5A_DS_2 from "./images/PUMP/5A-DS-2.jpeg";
import a3A_SS_2_5 from "./images/PUMP/3A-SS-2.5.jpg";

import a7L_DD_200 from "./images/PUMP/7L-DD-200.png";
import a5L_SS_45 from "./images/PUMP/5L-SS-45.jpeg";
import a5L_DS_4 from "./images/PUMP/5L-DS-4.jpeg";
import a5L_DD_120 from "./images/PUMP/5L-DD-120.jpeg";
import a3L_SS_8 from "./images/PUMP/3L-SS-8.png";

import TwoStageSeries from "./images/PUMP/Two Stage Series.png";
import SingleActingSeries from "./images/PUMP/Single Acting Series.jpeg";
import DoubleActingSeries from "./images/PUMP/Double Acting Series.jpeg";
import a3G_SS_20 from "./images/PUMP/3G-SS-20.png";
import a3G_DS_29 from "./images/PUMP/3G-DS-29.png";

import llc1001 from "./images/valve/llc1001.png";
import llc1001A from "./images/valve/llc1001A.jpeg";
import llc1001XL from "./images/valve/llc1001XL.jpeg";

import Sunhydraulic from "./images/valve/Sunhydraulic.png";
import Series_CB from "./images/valve/Counterbalance Cartrdge Valve Series CB.png";
import Series_CE from "./images/valve/Counterbalance Cartrdge Valve Series CE.png";
import Series_CW_CA from "./images/valve/Counterbalance Cartrdge Valve Series CW _ CA.png";
import Series_MB_MW from "./images/valve/Counterbalance Cartrdge Valve Series MB _ MW.png";
import Series_MB from "./images/valve/Counterbalance Cartrdge Valve Series MB.png";

import Series_2200 from "./images/valve/Control Valve Series 2200.png";
import Series_2220 from "./images/valve/Control Valve Series 2220.png";

import Series_M200 from "./images/butterfly_valve/Butterfly Valve Series M200.png";
import Series_M285 from "./images/butterfly_valve/Butterfly Valve Series M285.png";
import Series_R285 from "./images/butterfly_valve/Butterfly Valve Series R285.png";
import Series_R200 from "./images/butterfly_valve/Butterfly Valve Series R200.png";

import main_size from "./images/chart_Recorder/Chart Recorder.png";
import back_size1 from "./images/chart_Recorder/Chart Recorder(Back Side)1.png";
import back_size2 from "./images/chart_Recorder/Chart Recorder(Back Side)2.png";
import front_size from "./images/chart_Recorder/Chart Recorder (Front Side).png";
import open_size from "./images/chart_Recorder/Chart Recorder (Open Side).png";

import main_Thermometer from "./images/Thermometer/Thermometer_main.png";
import Thermometer from "./images/Thermometer/Thermometer.png";
import Thermometer_specs1 from "./images/Thermometer/Thermometer specs1.png";
import Thermometer_specs2 from "./images/Thermometer/Thermometer specs.png";

import OnePiece from "./images/Thermoplastic_hose/OnePiece.png";
import Type25_4 from "./images/Thermoplastic_hose/Hose Type 25-4.jpg";
import Type20_2W from "./images/Thermoplastic_hose/Hose Type 20-2W.jpg";
import Type8_2 from "./images/Thermoplastic_hose/Hose type 8-2.jpg";
import Type6_4 from "./images/Thermoplastic_hose/Hose Type 6-4.jpg";

import graphic_control from "./images/cpnp/graphic_control.png";
import BR_500 from "./images/cpnp/BR_500.gif";
import MC_MP_100 from "./images/cpnp/MC_MP_100.gif";
import MC_MP_5000 from "./images/cpnp/MC_MP_5000.gif";
import MP_BLU_MKR from "./images/cpnp/MP_BLU_MKR.jpeg";
import MP_RED_MKR from "./images/cpnp/MP_RED_MKR.jpeg";

export const dataProducts = {
  pump: {
    name: "PUMP",
    image: pump,
    product: {
      piston_pump: {
        name: "PISTON PUMP",
        description: "piston_pump_description",
        specification: "piston_pump_specification",
        image: Model_335,
        brand: "CAT PUMPS",
        brand_id: "cat_pumps",
        brochue:
          "https://drive.google.com/drive/folders/1yvbYC2ODH9HJ7kNNxfDQ66HmRzGW0-b2",
        similar_product: {
          model1: {
            name: "Model 323",
            image: Model_323,
          },
          model2: {
            name: "Model 6041",
            image: Model_6041,
          },
          model3: {
            name: "Model 281",
            image: Model_281,
          },
          model4: {
            name: "Model 1011",
            image: Model_1011,
          },
        },
      },
      special_pump: {
        name: "SPECIAL PUMP",
        description: "special_pump_description",
        specification: "special_pump_specification",
        image: CO2,
        brand: "CAT PUMPS",
        brand_id: "cat_pumps",
        brochue:
          "https://drive.google.com/drive/folders/1gVDfRosV90TOuuoXxsCzQQpNPwhvY760",
        similar_product: {
          model1: {
            name: "TEG Series",
            image: TEG,
          },
          model2: {
            name: "High Temperature Series",
            image: High,
          },
          model3: {
            name: "ATEX Series",
            image: ATEX,
          },
        },
      },
      plunger_pump: {
        name: "PLUNGER PUMP",
        description: "plunger_pump_description",
        specification: "plunger_pump_specification",
        image: Model1570,
        brand: "CAT PUMPS",
        brand_id: "cat_pumps",
        brochue:
          "https://drive.google.com/drive/folders/1Cqz7GGvLoRXzkgdM0Q6tFfkk3BrNV4OB",
        similar_product: {
          model1: {
            name: "Model 3541",
            image: Model3541,
          },
          model2: {
            name: "Model 2537",
            image: Model2537,
          },
          model3: {
            name: "Model 2SF11ES",
            image: Model2SF11ES,
          },
          model4: {
            name: "Model 2SFO5SEL",
            image: Model2SF05SEEL,
          },
        },
      },
      air_pressure_amplifier: {
        name: "AIR PRESSURE AMPLIFIER ",
        description: "AIR_PRESSURE_AMPLIFIER_description",
        specification: "AIR_PRESSURE_AMPLIFIER_specification",
        image: air_main,
        brand: "HII",
        brand_id: "hydraulics_international",
        brochue:
          "https://drive.google.com/drive/folders/1MkFZzNdz3HNMtSMaQRGKlXDZa8Qypm1e",
        similar_product: {
          model1: {
            name: "7A-DS-8",
            image: a7A_DS_8,
          },
          model2: {
            name: "5A-DS-5",
            image: a5A_DS_5,
          },
          model3: {
            name: "5A-DS-2",
            image: a5A_DS_2,
          },
          model4: {
            name: "3A-SS-2.5",
            image: a3A_SS_2_5,
          },
        },
      },
      air_driven_liquid_pumps: {
        name: "AIR DRIVEN <br> LIQUID PUMP",
        description: "air_driven_liquid_pumps_description",
        specification: "air_driven_liquid_pumps_specification",
        image: a7L_DD_200,
        brand: "HII",
        brand_id: "hydraulics_international",
        brochue:
          "https://drive.google.com/drive/folders/1kp4LsZXGav2QXYdZ072lKR4b5y3zBAhL",
        similar_product: {
          model1: {
            name: "5L-SS-45",
            image: a5L_SS_45,
          },
          model2: {
            name: "5L-DS-4",
            image: a5L_DS_4,
          },
          model3: {
            name: "5L-DD-120",
            image: a5L_DD_120,
          },
          model4: {
            name: "3L-SS-8",
            image: a3L_SS_8,
          },
        },
      },
      air_driven_gas_booters: {
        name: "AIR DRIVEN <br> GAS BOOSTER",
        description: "air_driven_gas_booters_description",
        specification: "air_driven_gas_booters_specification",
        image: TwoStageSeries,
        brand: "HII",
        brand_id: "hydraulics_international",
        brochue:
          "https://drive.google.com/drive/folders/1KuNX6mDN-0iw1dcPozR3r1hBX4OZ1MEl",
        similar_product: {
          model1: {
            name: "Single Acting Series",
            image: SingleActingSeries,
          },
          model2: {
            name: "Double Acting Series",
            image: DoubleActingSeries,
          },
          model3: {
            name: "3G-SS-20",
            image: a3G_SS_20,
          },
          model4: {
            name: "3G-DS-29",
            image: a3G_DS_29,
          },
        },
      },
    },
  },
  valve_control: {
    name: "VALVE & CONTROL",
    image: val,
    product: {
      liquid_level_controller: {
        name: "LIQUID LEVEL CONTROLLER",
        description: "liquid_level_controller_description",
        specification: "liquid_level_controller_specification",
        image: llc1001,
        brand: "Norriseal",
        brand_id: "norriseal",
        brochue:
          "https://drive.google.com/drive/folders/1LHk-VhSd5w0FdLqqKgib5V4WUqygB8aE",
        similar_product: {
          model1: {
            name: "Series 1001XL",
            image: llc1001XL,
          },
          model2: {
            name: "Series 1001A",
            image: llc1001A,
          },
        },
      },
      counterbalance_cartridge_valves: {
        name: "COUNTERBALANCE CARTRIDGE VALVE",
        description: "counterbalance_cartridge_valves_description",
        specification: "counterbalance_cartridge_valves_specification",
        image: Sunhydraulic,
        brand: "SUN HYDRAULICS",
        brand_id: "hidraulics",
        brochue:
          "https://drive.google.com/drive/folders/13kBDgD3dG6f9yYmB80py6o3UGVPTEMwS",
        similar_product: {
          model1: {
            name: "Counterbalance Cartridge Valve Series CB",
            image: Series_CB,
          },
          model2: {
            name: "Counterbalance Cartridge Valve Series CE",
            image: Series_CE,
          },
          model3: {
            name: "Counterbalance Cartridge Valve Series CW_CA",
            image: Series_CW_CA,
          },
          model4: {
            name: "Counterbalance Cartridge Valve Series MB_MW",
            image: Series_MB_MW,
          },
          model5: {
            name: "Counterbalance Cartridge Valve Series MB",
            image: Series_MB,
          },
        },
      },
      control_valve: {
        name: "CONTROL VALVE",
        description: "control_valve_description",
        specification: "control_valve_specification",
        image: Series_2200,
        brand: "Norriseal",
        brand_id: "norriseal",
        brochue:
          "https://drive.google.com/drive/folders/1UjR7FvPfR-NocMbGeV8vj6hJME8Kpbk9",
        similar_product: {
          model1: {
            name: "Series 2220",
            image: Series_2220,
          },
        },
      },
      butterfly_valve: {
        name: "BUTTERFLY VALVE",
        description: "butterfly_valve_description",
        specification: "butterfly_valve_specification",
        image: Series_R200,

        brand: "Norriseal",
        brand_id: "norriseal",
        brochue:
          "https://drive.google.com/drive/folders/1i9wlNmJSoseBwSd1CEb82Rd02vQ5cgoC",
        similar_product: {
          model1: {
            name: "Series R285",
            image: Series_R285,
          },
          model2: {
            name: "Series M285",
            image: Series_M285,
          },
          model3: {
            name: "Series M200",
            image: Series_M200,
          },
        },
      },
    },
  },
  thermoplastic_high_pressure_hoses: {
    name: "THERMOPLASTIC HIGH-PRESSURE HOSE",
    image: thph,
    product: {
      thermoplastic_high_pressure_hoses: {
        name: "THERMOPLASTIC HIGH-PRESSURE HOSE",
        description: "thermoplastic_high_pressure_hoses_description",
        specification: "thermoplastic_high_pressure_hoses_specification",
        image: OnePiece,
        brand: "Spir Star",
        brand_id: "spir_star",
        brochue:
          "https://drive.google.com/drive/folders/1mBZclKe91UIGznMEO3mSdlKRbpklDN45",
        similar_product: {
          model1: {
            name: "Type 25-4",
            image: Type25_4,
          },
          model2: {
            name: "Type 20-2W",
            image: Type20_2W,
          },
          model3: {
            name: "Type 8-2",
            image: Type8_2,
          },
          model4: {
            name: "Type 6-4",
            image: Type6_4,
          },
        },
      },
    },
  },
  thermometer: {
    name: "THERMOMETER",
    image: ther,
    product: {
      thermometer: {
        name: "THERMOMETER",
        description: "thermometer_description",
        specification: "thermometer_specification",
        image: main_Thermometer,
        brand: "Taylor",
        brand_id: "taylor",
        brochue:
          "https://drive.google.com/drive/folders/10k84mCNT9jI8ITzNDzp_diBzFv47d-8U",
        similar_product: {
          model1: {
            name: "Thermometer",
            image: Thermometer,
          },
          model2: {
            name: "Thermometer specs",
            image: Thermometer_specs1,
          },
          model3: {
            name: "Thermometer specs",
            image: Thermometer_specs2,
          },
        },
      },
    },
  },
  chart_recorder: {
    name: "CHART RECORDER",
    image: cr,
    product: {
      chart_recorder: {
        name: "CHART RECORDER",
        description: "chart_recorder_description",
        specification: "chart_recorder_specification",
        image: main_size,
        brand: "TECH CAL",
        brand_id: "techcal",
        brochue:
          "https://drive.google.com/drive/folders/1gKva7OvJsGl6HYHjnmo-RFsorMCbrbi3",
        similar_product: {
          model1: {
            name: "Front Side",
            image: front_size,
          },
          model2: {
            name: "Open Side",
            image: open_size,
          },
          model3: {
            name: "Back Side",
            image: back_size1,
          },
          model4: {
            name: "Back Side",
            image: back_size2,
          },
        },
      },
    },
  },
  chart_paper_n_pen: {
    name: "CHART PAPER & PEN",
    image: cpnp,
    product: {
      chart_paper_n_pen: {
        name: "CHART PAPER & PEN",
        description: "chart_paper_n_pen_description",
        specification: "chart_paper_n_pen_specification",
        image: graphic_control,
        brand: "GRAPHIC CONTROLS",
        brand_id: "graphic",
        brochue: null,
        similar_product: {
          model1: {
            name: "MP 82-39-0303-06 BLU MKR",
            image: MP_BLU_MKR,
          },
          model2: {
            name: "MC MP-100",
            image: MC_MP_100,
          },
          model3: {
            name: "MC MP-5000",
            image: MC_MP_5000,
          },
          model4: {
            name: "BR B 0-500-8",
            image: BR_500,
          },
        },
      },
    },
  },
};
