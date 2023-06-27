
"use strict";

let KeyboardInput = require('./KeyboardInput.js');
let Led = require('./Led.js');
let VersionInfo = require('./VersionInfo.js');
let ExternalPower = require('./ExternalPower.js');
let BumperEvent = require('./BumperEvent.js');
let CliffEvent = require('./CliffEvent.js');
let ControllerInfo = require('./ControllerInfo.js');
let Sound = require('./Sound.js');
let DigitalOutput = require('./DigitalOutput.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let MotorPower = require('./MotorPower.js');
let SensorState = require('./SensorState.js');
let ButtonEvent = require('./ButtonEvent.js');
let ScanAngle = require('./ScanAngle.js');
let DockInfraRed = require('./DockInfraRed.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');

module.exports = {
  KeyboardInput: KeyboardInput,
  Led: Led,
  VersionInfo: VersionInfo,
  ExternalPower: ExternalPower,
  BumperEvent: BumperEvent,
  CliffEvent: CliffEvent,
  ControllerInfo: ControllerInfo,
  Sound: Sound,
  DigitalOutput: DigitalOutput,
  RobotStateEvent: RobotStateEvent,
  PowerSystemEvent: PowerSystemEvent,
  WheelDropEvent: WheelDropEvent,
  DigitalInputEvent: DigitalInputEvent,
  MotorPower: MotorPower,
  SensorState: SensorState,
  ButtonEvent: ButtonEvent,
  ScanAngle: ScanAngle,
  DockInfraRed: DockInfraRed,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingAction: AutoDockingAction,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingResult: AutoDockingResult,
  AutoDockingGoal: AutoDockingGoal,
};
