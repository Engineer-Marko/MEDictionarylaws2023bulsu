let words = {
  data: [
    {
      productName: "Rails",
      category: "R",
      price: "a bar or series of bars, typically fixed on upright supports, serving as part of a fence or barrier or used to hang things on.",
      image: "Rails.jpg",
    },
    {
        productName: "Mechanical spring",
      category: "M",
        price: "Mechanical spring - In their simplest form, mechanical springs such as coil springs, leaf springs, volute springs and compression springs are elastic devices that store mechanical potential energy when deformed by compression, extension or torsion.",
        image: "Mechanical-spring.jpg",
    },
    {
      productName: "Fish Plate",
      category: "F",
      price: "Fish Plate-a metal or wooden plate that is bolted to the sides of the ends of two rails or beams, to join them. A fishplate is a flat piece of metal joining one rail or beam to another",
      image: "Fish-Plates.jpg",
    },
    {
      productName: "Rail joint ",
      category: "R",
      price: "a bar or series of bars, typically fixed on upright supports, serving as part of a fence or barrier or used to hang things on.",
      image: "Rail-joints.jpg",
    },
    {
            productName: "Guard rail",
            category: "G",
            price: "are linear motion methods used to optimize material, part, and assembly movement. These highly efficient rail systems are machined, and precision designed for smooth circulation.t is bolted to the sides of the ends of two rails or beams, to join them. A fishplate is a flat piece of metal joining one rail or beam to another",
            image: "Guard-Rail.jpg",
    },
    {
            productName: "Gears",
            category: "G",
            price: "a rotating circular machine part having cut teeth or, in the case of a cogwheel or gearwheel, inserted teeth (called cogs), which mesh with another (compatible) toothed part to transmit (convert) torque and speed. The basic principle behind the operation of gears is analogous to the basic principle of levers. Gears serve two main purposes: increasing speed or increasing force.",
            image: "Gears.jpg",
    },
    {
            productName: "Sheaves",
            category: "S",
            price: "A wheel with an open groove that a rope or cable fits around so it can rotate around the exterior. One end of the cable is attached to an item that needs to be moved, while the other is attached to a fixed object, like the base of a crane.",
            image: "sheaves.jpg",
    },
    {
            productName: "Grooving",
            category: "G",
            price: "a turning operation that creates a narrow cut, a groove in the workpiece. The size of the cut depends on the width of the cutting tool. Multiple tool passes are necessary to machine wider grooves. There are two types of grooving operations, external and face grooving.",
            image: "Grooving.jpg",
    },
    {
            productName: "Keys",
            category: "K",
            price: "a machine element used to connect a rotating machine element to a shaft. The key prevents relative rotation between the two parts and may enable torque transmission.",
            image: "keys.jpg",
    },
    {
            productName: "Worm gear",
            category: "W",
            price: "a gear consisting of a shaft with a spiral thread that engages with and drives a toothed wheel. It changes the rotational movement by 90 degrees, and the plane of movement also changes due to the position of the worm on the worm wheel (or simply 'the wheel'). They are typically comprised of a steel worm and a brass wheel.",
            image: "worm-gears.jpg",
    },
    {
            productName: "Hydraulic Elevators",
            category: "H",
            price: "Hydraulic systems don't use overhead hoisting machinery. Instead, these elevators use the compression of fluids to generate movement. The elevator cab is lifted by an electric motor that pumps oil into the cylinder to move the piston.",
            image: "hydraulic-elevators.jpg",
    },
    {
            productName: "Levers",
            category: "L",
            price: "consists of a beam or rod, which pivots on a fulcrum. The purpose is to lift weights with less effort. A good example of a lever is children on opposite ends of a seesaw, lifting each other's weight up and down.",
            image: "lever.jpg",
    },
    {
            productName: "Wire Ropes",
            category: "W",
            price: "used dynamically for lifting and hoisting in cranes and elevators, and for transmission of mechanical power. Wire rope is also used to transmit force in mechanisms, such as a Bowden cable or the control surfaces of an airplane connected to levers and pedals in the cockpit.",
            image: "wire-ropes.jpg",
    },
    {
            productName: "Beams",
            category: "B",
            price: "a structural element that primarily resists loads applied laterally to the beam's axis (an element designed to carry primarily axial load would be a strut or column). Its mode of deflection is primarily by bending. The loads applied to the beam result in reaction forces at the beam's support points.",
            image: "Beams.jpg",
    },
    {
            productName: "Bracket",
            category: "B",
            price: "any intermediate component for fixing one part to another, usually larger, part. What makes a bracket a bracket is that it is intermediate between the two and fixes the one to the other.",
            image: "Bracket.jpg",
    },
    {
            productName: "Car Frame",
            category: "C",
            price: "car’s structural support system. Made of steel or aluminum, the purpose of a car frame is to: Support all mechanical components of the car. Support the car body, or shape.",
            image: "Car-Frame.jpg",
    },
    {
            productName: "Terminal Stopping Device",
            category: "T",
            price: "a device or devices to slow down and stop a hoist car automatically at or near a terminal landing, independently of the functioning of the operating device.",
            image: "Terminal-Stopping-Device.jpg",
    },
    {
            productName: "Car Door",
            category: "C",
            price: "a type of door opening, typically hinged on its front edge, but sometimes attached by other mechanisms such as tracks, for entering and exiting a vehicle.",
            image: "Car-Door.jpg",
    },
    {
            productName: "Machine Room Elevator",
            category: "M",
            price: "shall be located adjacent to the elevator hoistway and pit area at the lowest level of elevator travel. Traction elevator machine rooms shall be located directly over the hoistway of the elevator served by that equipment.",
            image: "Machine-Room.jpg",
    },
    {
            productName: "Dumb Waiter Cars",
            category: "D",
            price: "a small freight elevator used to transport food or dirty dishes from meals between floors in a house or other building.",
            image: "Dumbwaiter-Cars.jpg",
    },
    {
            productName: "Ducts",
            category: "D",
            price: "conduits or passages used in heating, ventilation, and air conditioning (HVAC) to deliver and remove air. The needed airflows include, for example, supply air, return air, and exhaust air.",
            image: "Ducts.jpg",
    },
    {
            productName: "Duct System",
            category: "D",
            price: "The ventilation system in a building consists of air-moving devices such as fans and blowers and a network of ducts to exhaust the contaminated indoor air and to bring in air from the outside of the building. Ducts are channels, tubes, or pipes that carry moving air.",
            image: "Duct-System.jpg",
    },
    {
            productName: "Plenum",
            category: "P",
            price: "a separate space provided for air circulation for heating, ventilation, and air-conditioning (sometimes referred to as HVAC) and typically provided in the space between the structural ceiling and a drop-down ceiling.",
            image: "Plenum.jpg",
    },
    {
            productName: "Air Ducts",
            category: "A",
            price: "channels or conduits that transport air throughout your home. They are typically made of sheet metal or other materials, and they connect to your home's heating, ventilation, and air conditioning (HVAC) system",
            image: "Air-Ducts.jpg",
    },
    {
            productName: "Vibration Isolation",
            category: "V",
            price: "a commonly used technique for reducing or suppressing unwanted vibrations in structures and machines. With this technique, the device or system of interest is isolated from the source of vibration through the insertion of a resilient member or isolator.",
            image: "Vibration-Isolation.jpg",
    },
    {
            productName: "Metal Duct",
            category: "M",
            price: "Made of galvanized steel or aluminum, rigid sheet metal is the most common type of ductwork. The thick, solid wall makes the duct very durable. The interior is known to trap dust and other particles, but the smooth surface is generally easy to clean.",
            image: "Metal-Duct.jpg",
    },
    {
            productName: "Smoke Dampers",
            category: "S",
            price: "operate automatically on detection of smoke and must function so that smoke movement through the duct is halted. There activation can be by area detectors that are installed in the related smoke compartment or by detectors that are installed in the air duct systems.",
            image: "Smoke-Dampers.jpg",
    },
    {
            productName: "Fire Dampers",
            category: "F",
            price: "passive fire protection products used in heating, ventilation, and air conditioning (HVAC) ducts to prevent and isolate the spread of fire inside the ductwork through fire-resistance rated walls and floors.",
            image: "Fire-Dampers.jpg",
    },
    {
            productName: "Ceiling Dampers",
            category: "C",
            price: "designed and tested to limit the radiant heat transfer through an air inlet/outlet opening in the ceiling membrane of a fire-resistance-rated floor/ceiling or roof/ceiling assembly.",
            image: "Ceiling-Dampers.jpg",
    },
    {
            productName: "Ventilation System",
            category: "V",
            price: "the process of exchanging or replacing air in any space to provide high indoor air quality which involves temperature control, oxygen replenishment, and removal of moisture, odors, smoke, heat, dust, airborne bacteria, carbon dioxide, and other gases.",
            image: "Ventilation-System.jpg",
    },
    {
            productName: "Infiltration",
            category: "I",
            price: "the unintentional or accidental introduction of outside air into a building, typically through cracks in the building envelope and through use of doors for passage. Infiltration is sometimes called air leakage. The leakage of room air out of a building, intentionally or not, is called exfiltration.",
            image: "Infiltration.jpg",
    },
    {
            productName: "Louvers",
            category: "L",
            price: "an arrangement of parallel, horizontal blades, slats, laths, slips of glass, wood, or other material designed to regulate airflow or light penetration. Louvers are often used in windows or doors in order to allow air or light in while keeping sunshine or moisture out.",
            image: "Louvers.jpg",
    },
    {
            productName: "Grills",
            category: "G",
            price: "coverings on the return air vents of your HVAC system. Return vents do as their name suggests, they return air to your central heating or cooling system to condition it. Grills are very similar to registers except that they DO NOT have dampers.",
            image: "Grills.jpeg",
    },
    {
            productName: "Ducts",
            category: "D",
            price: "conduits or passages used in heating, ventilation, and air conditioning (HVAC) to deliver and remove air. The needed airflows include, for example, supply air, return air, and exhaust air.",
            image: "Ducts.jpg",
    },
    {
            productName: "Screens",
            category: "S",
            price: "screen serves as one more filter for your air conditioning unit, and it can increase the efficiency of your system by keeping fine airborne debris from clogging up your system. The screens are made up of a fine mesh filter that you can customize to the shape of your compressor.",
            image: "Screens.jpg",
    },
    {
            productName: "Chimneys",
            category: "C",
            price: "a structure, usually vertical, containing a passage or flue by which the smoke, gases, etc., of a fire or furnace, are carried off and by means of which a draft is created.",
            image: "Chimneys.jpg",
    },
    {
            productName: "Vents",
            category: "V",
            price: "the openings through which air is delivered into the room. The size, shape, and location of the air vents are determined by the design of the HVAC system. The most common type of air vent is the floor vent, which is designed to deliver air into the room at a low level.",
            image: "Vents.jpg",
    },
    {
            productName: "Ventilation Hood",
            category: "V",
            price: "a type of exhaust hood used to remove hazards or unwanted contaminants (i.e., heat, fumes, and dust) from an area. Vent hoods are positioned directly above the area in which the unwanted emissions will be released, such as above an oven that is used to boil a liquid requiring steam venting.",
            image: "Ventilation-Hood.jpg",
    },
    {
            productName: "Gas Venting System",
            category: "G",
            price: "an important component of the combustion process of a gas furnace. A venting system ensures that the hazardous gasses are removed from the heat exchangers and burners at the end of a heating cycle. If your furnace is not turning on, the source of the problem may be a damaged vent.",
            image: "Gas-Venting-System.jpg",
    },
    {
            productName: "Draft Hoods",
            category: "D",
            price: "a device that sits in between the appliance and the chimney, allowing a break to form in the system. This device allows better draft control of the system, as well as helping gather toxic fumes from within the appliance and expelling them out of the building through the chimney pipe or vent.",
            image: "Draft-Hoods.jpg",
    },
    {
            productName: "Smoke Control System",
            category: "S",
            price: "a system that controls the movement of smoke and air in a building. It can be made up of multiple different components and use several methods to achieve its design objective, which is typically to maintain a tenable environment long enough for all occupants to egress the building.",
            image: "Smoke-Control-System.jpg",
    },
    {
            productName: "Hydronics System",
            category: "H",
            price: "heating systems that circulate water through pipes to either heat or cool a building. Another name for hydronic systems is radiant heat systems because they transmit temperature from inside the tubing to the surrounding environment through radiation.",
            image: "Hydronics-System.jpg",
    },
    {
            productName: "Insulation",
            category: "I",
            price: "provides resistance to heat flow and lowers your heating and cooling costs. Properly insulating your home not only reduces heating and cooling costs but also improves comfort.",
            image: "Insulation.jpg",
    },
    {
            productName: "Pipe Hanger",
            category: "P",
            price: "a designed element that transfers the load from a pipe to the supporting structures. The load includes the weight of the pipe proper, the content that the pipe carries, all the pipe fittings attached to the pipe, and the pipe covering such as insulation.",
            image: "Pipe-Hanger.jpg",
    },
    {
            productName: "Refrigeration System",
            category: "R",
            price: "operate on a series of consecutive thermodynamic processes that form a cycle that returns the working substance to the same state. A thermodynamic refrigeration cycle removes heat from a low-temperature object (refrigeration) and rejects it at a higher temperature.",
            image: "Refsys.jpg",
    },
    {
            productName: "Refrigerants",
            category: "R",
            price: "a working fluid used in the refrigeration cycle of air conditioning systems and heat pumps where in most cases they undergo a repeated phase transition from a liquid to a gas and back again.",
            image: "Refrigerants.jpg",
    },
    {
            productName: "Gas Pressure Regulator",
            category: "G",
            price: "Reduce high-pressure gas in a cylinder or process line to a lower, usable level as it passes to another piece of equipment. They also maintain pressure within a gas delivery system. Gas pressure regulators are not flowing control devices; they are used to control delivery pressure only.",
            image: "Gas-Pressure-Regulator.jpg",
    },
    {
            productName: "Shutoff Valve",
            category: "S",
            price: "allow for the safe control of compressed air in pneumatic applications and are used in a range of industries. Shut-off valves are also a useful accessory to stop the air supply in controlled conditions where a process must work correctly and safely.",
            image: "Shutoff-Valve.jpg",
    },
    {
            productName: "Boiler Rooms",
            category: "B",
            price: "the place where mechanical equipment related to producing hot water and controlling the climate of your home resides. Most municipalities have strict building codes for boiler rooms.",
            image: "Boiler-Rooms.jpg",
    },
    {
            productName: "Heater Control Panel",
            category: "H",
            price: "a system with a temperature controller, temperature sensor, and a way of relaying power to the heater to create heat for a given process.",
            image: "Heater-Control-Panel.jpg",
    },
    {
            productName: "Fuel Tank",
            category: "F",
            price: "a reservoir that holds the fuel supply and helps maintain its temperature at a level below its flash point. The fuel tank also serves as an important means of dissipating heat from the fuel that is returned from the engine",
            image: "Fuel-Tank.jpg",
    },
    {
            productName: "Crankcase",
            category: "C",
            price: " It houses the entire crank mechanism including pistons, cylinders, and connecting rods. Accessories, the transmission/gearbox, and the engine control system with cylinder head are attached to the crankcase.",
            image: "Crankcase.jpg",
    },
    {
            productName: "Air Handling Unit",
            category: "A",
            price: "the heart of central air conditioning. It collects outside air and room air, removes dust and other particles from the collected air, adjusts the temperature and humidity, and then supplies comfortable and refreshing air-conditioned air into the rooms through ducts.",
            image: "Air-Handling-Unit.jpg",
    },
    {
            productName: "Sprinklers",
            category: "S",
            price: "the method of applying water in a controlled manner that is similar to rainfall. The water is distributed through a network that may consist of pumps, valves, pipes, and sprinklers. Irrigation sprinklers can be used for residential, industrial, and agricultural usage.",
            image: "Sprinklers.jpg",
    },
    {
            productName: "Non-potable Water",
            category: "N",
            price: "not treated to drinking water standards and is not meant for human consumption. Non-potable water, such as raw (untreated) water from reservoirs, is used for irrigation and other purposes, in addition to recycled water (highly-treated wastewater).",
            image: "Non-potable-water.jpg",
    },
    {
            productName: "Potable Water",
            category: "P",
            price: "comes from surface and ground sources and is treated to levels that meet state and federal standards for consumption. Water from natural sources is treated for microorganisms, bacteria, toxic chemicals, viruses, and fecal matter.",
            image: "Potable-Water.jpg",
    },
    {
            productName: "Closet Ring",
            category: "C",
            price: "installed over the drain opening in the floor directly beneath your toilet. It connects the toilet bowl to the sewer drain. A stainless steel toilet flange is typically a thin disk with several screw holes and two grooves.",
            image: "Closet-Ring.jpg",
    },
    {
            productName: "Cleanouts",
            category: "C",
            price: "location (usually on the side of the house or in the basement) where your sewer can be accessed to clear out clogs or scope the line.",
            image: "Cleanouts.jpg",
    },
    {
            productName: "Drainage",
            category: "D",
            price: "the natural or artificial removal of a surface's water and sub-surface water from an area with an excess of water.",
            image: "Drainage.jpg",
    },
    {
            productName: "Gutters",
            category: "G",
            price: "Part of a building's water discharge system. It is a trough or channel that runs around the perimeter of a roof, and collects rainwater runoff from the roof, discharging it, usually to rainwater downpipes which convey it to a drainage system.",
            image: "Gutters.jpg",
    },
    {
            productName: "Sewer",
            category: "S",
            price: "Conduit that carries wastewater from its source to a point of treatment and disposal. The wastewater may be domestic (sanitary) sewage, industrial sewage, storm runoff, or a mixture of the three.",
            image: "Sewer.jpg",
    },
    {
            productName: "Vent Pipes",
            category: "V",
            price: "Ensure fresh air gets into the drainage pipes so that water can move from the toilet, sink, or shower when in use. When these systems are out of balance, they work against each other, causing various plumbing issues in your home",
            image: "Vent-Pipes.jpg",
    },
    {
            productName: "Storm Drainage",
            category: "S",
            price: "It's a network of structures, channels and underground pipes that carry stormwater (rainwater) to ponds, lakes, streams and rivers.",
            image: "Storm-Drainage.jpg",
    },
    {
            productName: "Relief valve",
            category: "R",
            price: "it is is a type of safety valve used to control or limit the pressure in a system; excessive pressure might otherwise build up and create a process upset, instrument or equipment failure, explosion, or fire.",
            image: "relief-valve.jpg",
    },
    {
            productName: "Drainage tile pipe",
            category: "D",
            price: "are pipes buried in the ground at a shallow depth, to remove excess water from saturated soils. Modern drain “tiles” are actually perforated plastic drain tubes typically placed at a depth of 3 to 4 feet in an agricultural field.",
            image: "drainage-tile-pipe.jpg",
    },
    {
            productName: "Container valve",
            category: "C",
            price: "a valve that prevents hydrogen gas from flowing backward from the gas container to the gas filling port.",
            image: "container-valve.jpg",
    },
    {
            productName: "Fusible plug",
            category: "F",
            price: "It is a threaded cylinder of metal usually of bronze, brass or gunmetal, with a tapered hole drilled completely through its length.",
            image: "fusible-plug.jpg",
    },
    {
            productName: "Rupture disk",
            category: "R",
            price: "It is a type of sacrificial part because it has a one-time-use membrane that fails at a predetermined differential pressure, either positive or vacuum. The membrane is usually made out of metal, but nearly any material (or different materials in layers) can be used to suit a particular application.",
            image: "rupture-disk.jpg",
    },
    {
            productName: "Steel fitting",
            category: "S",
            price: "It is a piece of steel used to connect separate sections of pip together.",
            image: "steel-fitting.jpg",
    },
    {
            productName: "Steel valve",
            category: "S",
            price: "are especially tough because they are made of steel and because of their corrosion resistance.",
            image: "steel-valve.jpg",
    },
    {
            productName: "Pipe nipple",
            category: "P",
            price: "It is used to make a watertight seal when connecting piping to threaded fittings, valves or equipment.",
            image: "pipe-nipple.jpg",
    },
    {
            productName: "Tubular gauge glass",
            category: "T",
            price: " provides highly accurate readings of pressure and water levels in industrial and commercial applications, and enables the observation of chemical processes inside tanks, pipes, and reactors.",
            image: "tubular-gauge-glass.jpg",
    },
    {
            productName: "Metallic hose",
            category: "M",
            price: "It is a hose whose strength depends primarily upon the strength of its metallic part, but it may have non-metallic liners and/or covers.",
            image: "metallic-hose.jpg",
    },
    {
            productName: "Skid tank",
            category: "S",
            price: "designed for stability and allow you to easily relocate your tank if it cannot be lifted.",
            image: "skid-tank.jpg",
    },
    {
            productName: "Street elbow",
            category: "P",
            price: "a type of plumbing or piping fitting that connects two pipes at a 90-degree angle. It is typically used to redirect the flow of fluid or gas in a plumbing system, particularly in tight spaces where a normal elbow fitting would not fit.",
            image: "street-elbow.jpg",
    },
    {
            productName: "Flow valve",
            category: "V",
            price: "a valve used to regulate or control the rate of flow of a fluid in a system. It can be manually operated or automated and can be found in a variety of applications, including plumbing, heating and cooling systems, and industrial processes.",
            image: "flow-valve.jpg",
    },
    {
            productName: "Vacuum tube",
            category: "V",
            price: "A vacuum tube, also known as a thermionic valve, is an electronic component that consists of a sealed glass or metal container containing a vacuum. It is used to control electric current in electronic devices by manipulating the flow of electrons between metal electrodes.",
            image: "vacuum-tube.jpg",
    },
    {
            productName: "Boiler",
            category: "B",
            price: "A boiler is a closed vessel in which water or other fluid is heated. The heated or vaporized fluid exits the boiler for use in various processes or heating applications.",
            image: "boiler.jpg",
    },
    {
            productName: "Pressure vessel",
            category: "P",
            price: "It is a container designed to hold gases or liquids at a pressure substantially different from the ambient pressure.",
            image: "pressure-vessel.jpg",
    },
    {
            productName: "Safety valve",
            category: "S",
            price: "It is a type of valve designed to automatically release pressure from a system toin order to prevent catastrophic failures, such as explosion or fire.",
            image: "safety-valve.jpg",
    },
    {
            productName: "Safety relief valve",
            category: "S",
            price: "A safety relief valve is a type of safety valve that automatically releases fluid or gas from a system if the pressure exceeds a predetermined level, toin order to prevent damage to the system or equipment and avoid any safety hazards.",
            image: "safety-relief-valve.jpg",
    },
    {
            productName: "Rivet",
            category: "R",
            price: "A type of fastener consisting of a smooth, cylindrical shaft with a head that is typically round or oval-shaped, used to permanently join two or more materials together by forming a bulge (or head) at the opposite end after insertion.",
            image: "rivet.jpg",
    },
    {
            productName: "Piston",
            category: "P",
            price: "A piston is a component of an internal combustion engine, acting as a movable end of the combustion chamber.",
            image: "piston.jpg",
    },
    {
            productName: "Fuel Gas Piping System",
            category: "F",
            price: "the arrangement of piping, tubing, fittings, connectors, valves, and devices designed and intended to supply or control the flow of fuel oil to the appliance(s).",
            image: "Fuel-Gas-Piping-System.jpg",
    },
    {
            productName: "Liquid Petroleum Gas",
            category: "L",
            price: "a mixture of the liquefied gases of propane and butane. It is obtained from natural gas or petroleum. LPG is liquefied for transport and then vaporized for use as a heating fuel, engine fuel, or as a feedstock in the petrochemical or chemical industries.",
            image: "Liquid-Petroleum-Gas.jpg",
    },
    {
            productName: "Test Gauge",
            category: "T",
            price: "a measuring instrument that is used in the testing of equipment andin laboratory testing.",
            image: "Test-Gauge.jpg",
    },
    {
            productName: "Flange",
            category: "F",
            price: "a method of connecting pipes, valves, pumps, and other equipment to form a piping system. It also provides easy access for cleaning, inspection or modification.",
            image: "Flange.jpg",
    },
    {
            productName: "Pressure Regulator",
            category: "P",
            price: "a device that controls the pressure of liquids or gasses by reducing a high input pressure to a lower output pressure. It produces a constant output pressure even when fluctuations in the inlet pressure occur.",
            image: "Pressure-Regulator.jpg",
    },
    {
            productName: "Gas Valve",
            category: "G",
            price: "a device used to regulate the flow of oil and gas. Opening or closing an aperture controls the amount of liquids and gases allowed through pipes. The valve controls the flow of fluids by stopping and starting, adjusting the amounts, controlling the direction, regulating pressure, or relieving pressure.",
            image: "Gas-Valve.jpg",
    },
    {
            productName: "Pressurized Stair Tower",
            category: "P",
            price: " to prevent smoke and heat from leaking past closed doors and infiltrating stairwells. The systems control air pressures to restrict smoke and heat movements.",
            image: "Pressurized-STair-Tower.jpg",
    },
    {
            productName: "Fire Smoke Barrier",
            category: "F",
            price: "designed to restrict the movement of smoke and are used to create smoke compartments to allow for horizontal evacuation into areas of refuge. Smoke barriers are almost exclusively found in health care and ambulatory occupancies.",
            image: "Fire-Smoke-Barrier.jpg",
    },
    {
            productName: "Smoke Exhaust System",
            category: "S",
            price: "They prevent a build-up of smoke, heat, and toxic gases, prolonging the tenability of the escape and rescue routes and increasing the time available for building occupants to escape,",
            image: "Smoke-Exhaust-System.jpg",
    },
    {
            productName: "Fire Ventilation",
            category: "F",
            price: "Fire gases must be vented out, but also that fresh air will flow in (generally). This supply of air normally affects the fire in such a way that the rate of heat release from the fire increases or the fire spreads faster.",
            image: "Fire-Ventilation.jpg",
    },
    {
            productName: "Elevator Smoke Guard",
            category: "E",
            price: "provides a smoke- and draft-control assembly for the fire-rated elevator door frame.",
            image: "Elevator-Smoke-Guard.jpg",
    },
    {
            productName: "Propeller Fan",
            category: "P",
            price: "It is used in applications with low-pressure differentials but large volumes of air movement are required. It is also known as an axial fan as the air flows parallel to the axis of rotation of the fan.",
            image: "Propeller-Fan.jpg",
    },
    {
            productName: "Mini Boiler",
            category: "M",
            price: "A mini boiler is consisting of a boiler, heater, and gate valve. This pressurized steam is given to the generator. The output of this generator is connected to the Battery or system grid",
            image: "Mini-Boiler.jpg",
    },
    {
            productName: "Package Boiler",
            category: "P",
            price: "a boiler that is shipped complete with heating equipment, mechanical draft equipment, and automatic controls, including factory-built boilers, manufactured as a unit or system, disassembled for shipment, and reassembled at the site.",
            image: "Package-Boiler.jpg",
    },
    {
            productName: "Power Boiler",
            category: "P",
            price: "a boiler in which steam or other vapor is generated at a pressure of more than 15 psig and includes water boilers operating at pressures exceeding 160 psig or temperatures exceeding 250º F at or near the boiler outlet.",
            image: "Power-Boiler.jpg",
    },
    {
            productName: "Kitchen Sink",
            category: "K",
            price: "a basin for washing utensils used for cooking, eating, and drinking, located in a kitchen and connected to both hot and cold water lines and properly connected to a drainage system.",
            image: "Kitchen-SInk.jpg",
    },
    {
            productName: "Fire Alarm System",
            category: "F",
            price: "a unit made of several devices, which uses visual and audio signalization to warn people about a possible fire, smoke, or carbon monoxide occurrence in the area of coverage. Fire alarms are usually set in fire alarm systems to provide zonal coverage for residences and commercial buildings",
            image: "Fire-Alarm-System.jpg",
    },
    {
            productName: "Fire Alarm Control Panel",
            category: "F",
            price: "the central hub of operations for a fire alarm system. It tells each component what to do and when to do it. If fire alarms were musicians, the FACP would be the conductor.",
            image: "Fire-Alarm-Control-Panel.jpg",
    },
    {
            productName: "Foam Extinguishing System",
            category: "F",
            price: "a type of wet sprinkler system that combines both water and a foaming agent for large-scale fire extinguishment. This water-based fire sprinkler suppression system can extinguish extensive fires in mere seconds with incredible efficiency.",
            image: "Foam.jpg",
    },
    {
            productName: "Stand Pipe System",
            category: "S",
            price: "consist of piping and hose connections installed throughout a building to provide reliable water for the manual suppression of a fire by either the fire department or trained personnel",
            image: "Stand-Pipe-System.jpg",
    },
    {
            productName: "Fire Hose",
            category: "F",
            price: "a high-pressure hose that carries water to a fire to extinguish it. It's an essential piece of firefighting equipment necessary to carry water from a fire engine. The present-day design has been refined over centuries of firefighting.",
            image: "Fire-Hose.jpg",
    },
    {
        productName: "Jack Hammer",
        category: "J",
        price: "a pneumatically operated percussive rock-drilling tool usually held in the hands.",
        image: "Schematic-cross-section-diagram-of-electro-pneumatic-hammer.jpg",
    },
    {
        productName: "U-tube heat exchanger",
            category: "U",
        price: "U-tube heat exchanger is a form of tube and shell heat exchanger that is used in petroleum and chemical machinery. The tube box, casing, and tube buddle are the key components of a u-tube heat exchanger. Furthermore, drying is simple following the hydro test of the u-tube heat exchanger.",
        image: "labeled-diagram-of-shell-and-tube-heat-exchanger.jpeg",
    },
    {
            productName: "Xenon Light",
            category: "X",
            price: "A xenon, or high-intensity discharge (HID) light, is a gas-filled, very bright, and energy-efficient light. Xenon lights are relatively common in luxury vehicles you see on the road today.",
        image: "1479912879.jpg",
    },
    {
        productName: "Yield stress fluids",
            category: "Y",
        price: "Yield stress fluids are encountered in a wide range of applications: toothpastes, cements, mortars, foams, muds, mayonnaise, etc. The fundamental character of these fluids is that they are able to flow (i.e., deform indefinitely) only if they are submitted to a stress above some critical value. Otherwise they deform in a finite way like solids. The flow characteristics of such materials are difficult to predict as they involve permanent or transient solid and liquid regions that are generally hard to locate a priori.",
        image: "3a234fa1-57c8-405c-a62f-0275d5a815fd.jpg",
    },
    {
        productName: "Zero-gravity",
            category: "Z",
        price: "Zero-gravity is nothing but the condition of pure weightlessness as is experienced in space due to absence of any net gravity in any direction. On the other hand, antigravity is kind of a hypothetical gravitational force exerted by negative mass. You can also consider it to be a repulsive gravitational force.",
        image: "zy3adq3fsQD6cn44KG54qQ.jpeg",
    },
    {
        productName: "Ocean Thermal Energy Conversion (OTEC) systems",
            category: "O",
        price: "use a temperature difference (of at least 20° Celsius or 36° Fahrenheit) to power a turbine to produce electricity. Warm surface water is pumped through an evaporator containing a working fluid. The vaporized fluid drives a turbine/generator.",
        image: "oceanthermal.png",
    },
    {
        productName: "Quintuplex pumps",
            category: "Q",
        price: "Quintuplex pumps are a common positive displacement pump used across many industries. The pump design allows for higher flow rates and smoother flow while still achieving high relative pressures. Dual-action quintuplex pumps can be purchased but are rare and usually custom manufactured.",
        image: "GD-Thunder_5000HP_Quintuplex.jpeg",
    },
    {
            productName: "BSME-4D TEAM BUILDING",
            category: "B",
        price: "Despite the fact that we have so many misunderstandings that resulted in misconceptions and conflicts, with all abouts, we are able to celebrate unity in this diverse world with your dynamic personality. We can still find the intersection that melts down differences; we found that POINT. #ME4D BATCH-KAYANGKAYA! See you sa next round! You guys made our day! Whatablast!",
            image: "Adatetoremember.jpeg",
    },
  ],
};

for (let i of words.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
