import axios from "axios";
import { environment } from "../config/environment";

const BASE_URL = `${environment.VITE_API_URL}/api/sizing/create`;

export const createSizing = async () => {
  // As of now harcoding after ui data is saving in redux we will add dynamically
  const data = {
    PA_REFERENCE_ID: "",
    TECHNOLOGY_TYPE: "DP_FLOW",
    INSTRUMENT_TYPE: "FLOW_METER",
    APPLICATION_NAME: "test",
    BUSINESS_UNIT: "RMT",
    ORG_ID: 4150,
    SIZING_COMPLETED_FLAG: "Y",
    REQUESTED_BY: "nupur.khurana@emerson.com",
    PROC_PIPING_UOM: "INCH",
    PIPE_CROSS_SECTION: "CIRCULAR",
    CUSTOM_PIPE_ID_TYPE: "STANDARD",
    PIPE_MATERIAL: "CST",
    NOMINAL_PIPE_SIZE: "NPS_05",
    PIPE_SCHEDULE: "SCH_30",
    PIPE_ID: 0.65,
    WALL_THICKNESS: 0.095,
    FLOW_DIRECTION: "HORIZONTAL",
    FLUID_TYPE: "GAS",
    FLUID_SOURCE: "DATABASE",
    FLUID_NAME: "AIR",
    PIPE_OD: 0.84,
    FLOWRATE_NORMAL: 110,
    FLOWRATE_DESIGN: 120,
    FLOWRATE_UNIT: "SCFM",
    PROCESS_PRESSURE_MINIMUM: 110,
    PROCESS_PRESSURE_NORMAL: 120,
    PROCESS_PRESSURE_DESIGN: 130,
    PROCESS_PRESSURE_UNIT: "PSIG",
    PROCESS_TEMPERATURE_NORMAL: 110,
    PROCESS_TEMPERATURE_DESIGN: 120,
    PROCESS_TEMPERATURE_UNIT: "F",
    AMBIENT_TEMPERATURE_NORMAL: 110,
    AMBIENT_TEMPERATURE_UNIT: "F",
    ATMOSPHERE_PRESSURE: 14.696,
    ATMOSPHERE_PRESSURE_UNIT: "PSIA",
    MAX_WORKING_PRESSURE: 1399.99999999999,
    MAX_WORKING_PRESSURE_UNIT: "PSIG",
    FLUID_PROPERTY_TYPE: "DENSITY",
    DENSITY: 0.639,
    DENSITY_UNIT: "LB/FT3",
    COMPRESSIBILITY: 0.99860760915472,
    VISCOSITY: 0.019316,
    VISCOSITY_UNIT: "CP",
    ISENTROPHIC_EXPONENT: 1.40166213587193,
    VAPOR_PRESSURE: 19600.2926195577,
    VAPOR_PRESSURE_UNIT: "PSIG",
    BASE_REF_DENSITY: 0.0763581416354125,
    BASE_REF_DENSITY_UNIT: "LB/FT3",
    FS_PIPE_REYNOLDS_NUM: 276488.355364211,
    PRESSURE: 14.696,
    PRESSURE_UNIT: "PSIA",
    TEMPERATURE: 60,
    TEMPERATURE_UNIT: "F",
    MAX_STRUCTURAL_FR_UOM: "SCFM",
    MAX_STRUCTURAL_INT_EXRT_FR_UOM: "SCFM",
    PRIMARY_ELEMENT_MATERIAL: "SST_316",
    CALIBRATION_FACTOR: 1,
    BETA_RATIO: "ALL_STD_BETA_RATIO",
    BORE_SIZE: 0.249,
    OPERATING_CONDITIONS_NOTES: "NOT_APPLICABLE",
    CALCULATED_MIN_FLOWRATE: 0.437789489338201,
    CALCULATED_MIN_FLOWRATE_UNIT: "SCFM",
    DIFF_PRESSURE_NORMAL_FLOW: 6313.275,
    DIFF_PRESSURE_FULLSCALE_FLOW: 7513.319,
    PERMANENT_PRESSURE_LOSS: 7513.319,
    PERMANENT_PRESSURE_LOSS_UNIT: "INH2O@68F",
    PIPE_ROD_REYNOLDS_NUMBER: 0,
    METER_BETA_RATIO: 40,
    PRIMARY_ELEMENT: "COMPACT_ORIFICE_PLATE_P",
    TRANSMITTER_MOUNTING_STYLE: "DIRECT_MOUNT",
    TRANSMITTER_MANIFOLD_STYLE: "3_VALVE",
    TRANSMITTER_COMMCN_PROTOCOL: "4_20MA_HART",
    TRANSMITTER_MEASUREMENT_TYPE: "DP",
    TRANSMITTER_FLOW_CALC: "NO_FLOW_CALCULATIONS",
    TRANSMITTER_PERFORMANCE: "STANDARD",
    TRANSMITTER_WARRANTY: "18_MONTH_LIMITED_WARRANTY",
    TRANSMITTER_DIAGNOSTICS: "TRANSMITTER",
    TRANSMITTER_DISPLAY: "LCD_DISPLAY",
    TRANSMITTER_MODEL: "3051S_P_TRANSMITTER",
    TRANSMITTER_BASE_MODEL: "TP_405P_3051S",
    PERFORMANCE_CLASS: "CLASSIC",
    PLATE_THICKNESS_UNIT: "INCH",
    DP_AT_NORMAL_FLOW: 6313.275,
    DP_AT_FULLSCALE_FLOW: 7513.319,
    DP_UOM: "INH2O@68F",
    PROCESS_PRESSURE_VARIATION: "PROCESS_PRESSURE_2",
    PROCESS_TEMP_VARIATION: "PROCESS_TEMP_2",
    AMBIENT_TEMP_VARIATION: "AMBIENT_TEMP_5",
    PIPE_ID_UNCERTAINITY: "PIPE_ID_0.25",
    RESONANT_FREQUENCY: 0,
    RESONANT_FREQUENCY_UOM: "Hz",
    WAKE_FREQUENCY: 0,
    WAKE_FREQUENCY_UOM: "Hz",
    FLOW_COEFFICIENT: 0.619517385422217,
    ROD_REYNOLDS_NUM_MIN: 0,
    ROD_REYNOLDS_NUM_NORMAL: 0,
    GAS_EXPANSION_FACTOR: 0.56762182655014,
    PPL_AT_NORMAL_FLOW: 5164.600788871,
    PPL_AT_MAX_FLOW: 6146.3017652679,
    PPL_UOM: "INH2O@68F",
    VELOCITY_AT_MAX_FLOW: 103.648668591207,
    VELOCITY_UOM: "FT/SEC",
    ORIFICE_BORE_SIZE: 0,
    BETA_VALUE: 0.40032154340836,
    DISCHARGE_COEFFICIENT: 0.619517385422217,
    PIPE_SCH_ADJ_FACTOR: 1.0175005,
    TC_PIPE_ID: 0.650168028366415,
    TC_BORE_SIZE: 0.249095786197275,
    PE_MIN_LIMIT: 0.438,
    PE_MIN_LIMIT_UOM: "SCFM",
    STRL_LIMIT_DP: 0,
    STRL_LIMIT_DP_UOM: "INH2O@68F",
    MAX_ALLOW_PRES_TEMP: 1399.99999999999,
    MAX_ALLOW_PRES_TEMP_UOM: "PSIG",
    DESIGN_PRESSURE: 130,
    DESIGN_PRESSURE_UOM: "psig",
    DESIGN_TEMP: 120,
    DESIGN_TEMP_UOM: "F",
    RECM_MIN_DP: 0.1,
    RECM_MIN_DP_UOM: "INH2O@68F",
    RECM_MIN_REYNOLDS_NUM: 600,
    BORE_REYNOLDS_NUM: 633110.216667314,
    BODY_ID: 0.622,
    THERMAL_EXP_FACTOR: 0.608861996060167,
    LOW_FLOW_CUTOFF: 8,
    HIGH_RANGE_VALUE: 120,
    PIPE_DIAMETER: 0.650168028366415,
    TC_PIPE_DIAMETER: 0.650168028366415,
    ENABLE_MCAS: "Y",
    APPROVAL_REQ_FLAG: "Y",
    WARNING_MESSAGE:
      "XXIBE_PA_MSG_GEF_LOW_SOPDP_RMT,XXIBE_PA_MSG_MGF_VIO_OPRDP_RMT,XXIBE_PA_MSG_MPR_VIO_OPRDP_RMT,XXIBE_PA_MSG_MSDP_VIO_OPDP_RMT",
    OPR_PROC_PRES_ABSOLUTE: 134.696,
    OPR_PROC_PRES_ABSOLUTE_UOM: "PSIA",
    CALIBRATION_FACTOR_FLAG: "N",
    BORE_BETA_TYPE: "BORE_SIZE",
    DP_RANGE: "RANGE_4"
  };

  const response = await axios.post(BASE_URL, data);
  return response.data;
};